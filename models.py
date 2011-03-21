from google.appengine.ext import db

from geo.geomodel import GeoModel

class Neighborhood(db.Model):
    name = db.StringProperty()
    number_of_students = db.IntegerProperty()
    percent_single_family = db.FloatProperty()
    location = db.GeoPtProperty()

b_woods = Neighborhood()
b_woods.name = "b_woods"
b_woods.number_of_students = 120
b_woods.percent_single_family = 1.0
b_woods.location = db.GeoPt(33.969553,-84.159453)
b_woods.put()

card = Neighborhood()
card.name = "card"
card.number_of_students = 300
card.percent_single_family = 1.0
card.location = db.GeoPt(33.979392,-84.132407)
card.put()

class School(GeoModel):
    name = db.StringProperty(required=True)
    type = db.StringProperty(required=True, choices=set(["ES", "MS",
"HS"]))
    capacity = db.IntegerProperty()
    #location = db.GeoPtProperty()

    @staticmethod
    def public_attributes():
        """Returns a set of simple attributes on public school entities."""
        return [
            'school_id', 'name', 'address', 'city', 'state', 'zip_code',
            'enrollment', 'phone_number', 'locale_code', 'school_type',
            'school_level'
        ]

    def _get_latitude(self):
        return self.location.lat if self.location else None

    def _set_latitude(self, lat):
        if not self.location:
            self.location = db.GeoPt()

        self.location.lat = lat

    latitude = property(_get_latitude, _set_latitude)

    def _get_longitude(self):
        return self.location.lon if self.location else None

    def _set_longitude(self, lon):
        if not self.location:
            self.location = db.GeoPt()

        self.location.lon = lon

    longitude = property(_get_longitude, _set_longitude)


