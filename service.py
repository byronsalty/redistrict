import os
import sys
import wsgiref.handlers

from django.utils import simplejson

from google.appengine.ext import db
from google.appengine.ext import webapp

from google.appengine.ext.webapp.util import run_wsgi_app

from geo import geotypes
from geo import geomath

from models import Neighborhood

class MainPage(webapp.RequestHandler):
    """   """
    def get(self):
        self.response.out.write('hello<br/>')
        brom = Neighborhood.gql("WHERE name = :1", "b_woods").get()
        card = Neighborhood.gql("WHERE name = :1", "card").get()
        distance = geomath.distance(brom.location, card.location) * 0.000621371192
        self.response.out.write("%.2f miles" % distance)
        



def main():
    application = webapp.WSGIApplication(
                                     [('/', MainPage)],
                                     debug=True)
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
