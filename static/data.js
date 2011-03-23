  var poly;
  var map;
  var hoods;
  var schools;
  var displays = {
    hood: {polies: [],
           shown: true,
          },
    city: {polies: [],
           shown: true,
          },
  }

  function initialize() {
    var duluth = new google.maps.LatLng(34.0036956139944, -84.14257274609372);
    var myOptions = {
      zoom: 13,
      center: duluth,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    schools = {
      0: { 
       name: 'Harris ES',
       color: "#00FF00",
       position: new google.maps.LatLng(33.987044, -84.134333),
       parent: 5,
      },
      1: { 
       name: 'Mason ES',
       color: "#FF0000",
       position: new google.maps.LatLng(33.998857, -84.11959),
       parent: 7,
      },
      2: { 
       name: 'Chesney ES',
       color: "#66CCFF",
       position: new google.maps.LatLng(33.9604821, -84.1472781),
       parent: 5,
      },
      3: { 
       name: 'Berkeley Lake ES',
       color: "#3366CC",
       position: new google.maps.LatLng(33.977799, -84.186838),
       parent: 5,
      },
      4: { 
       name: 'Chattahoochie ES',
       color: "#FFFF8F",
       position: new google.maps.LatLng(34.017761, -84.147691),
       parent: 5,
      },
      5: { 
       name: 'Duluth MS',
       color: "#FFFFCC",
       position: new google.maps.LatLng(33.9838012, -84.1580857),
       parent: 6,
      },
      6: { 
       name: 'Duluth HS',
       color: "#FFFFCC",
       position: new google.maps.LatLng(34.009182, -84.144709),
       parent: null,
      },
      7: { 
       name: 'Hull MS',
       color: "#FFFFCC",
       position: new google.maps.LatLng(34.014501, -84.103997),
       parent: 8,
      },
      8: { 
       name: 'Ptree Ridge HS',
       color: "#FFFFCC",
       position: new google.maps.LatLng(34.0121277, -84.0916348),
       parent: null,
      },
      9: { 
       name: 'Burnette ES',
       color: "#00FF00",
       position: new google.maps.LatLng(34.031062, -84.064444),
       parent: 7,
      },
      10: { 
       name: 'Jackson ES',
       color: "#FFFF8F",
       position: new google.maps.LatLng(33.9878514, -84.0591835),
       parent: 7,
      },
      11: { 
       name: 'Parsons ES',
       color: "#3366CC",
       position: new google.maps.LatLng(34.0135009, -84.0930967),
       parent: 7,
      },
    }

    hoods = {
            0: {name: 'Bromolow',
                path: 'w{gnEpts`O{C_AgAmC_Aw@cAqEcHwG{BcAuCCcEbCeLtH_ArDvB~I_OdKqBdEcAnFqFz_@lCh@BgJnb@wX_DoJ`GgDnBfAh@YxC`L~DbPvAB|X{QqDkD{AwDcBuJ?]',
                schoolId: 0,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            1: {name: 'Harris Main',
                path: 'ybinEf_s`OtAuHcJiR{GeIaOcf@w@qFbBgJkHyYxPoMtAgCeZgdAg]ya@eMha@qJvQkDbW_C|ScVxQuYhRcZvQyLbOqNjSxXbWpVjSnKvIhTxC`[bHhh@bcA`OvIrEoM|GePhL{ZfM_FmCmMtIyJ',
                schoolId: 0,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            2: {name: 'Mall',
                path: 'ktinEbuq`O_Oej@lAsKuGwXpRoQuYifAg]ka@pBwQtEoBtSgCbVgF`_@_U`DjHbHvMrP`l@lWps@nSri@as@nc@aYp`@uWfY',
                schoolId: 1,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            3: {name: 'Mall Triangle',
                path: '{lknE`tj`OlAwk@pBcm@xDqYvNpCrXnQbNhRpHzOdC~T{]dToq@jM',
                schoolId: 1,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            4: {name: 'Kroger',
                path: 'qkfnE~vn`O_t@jb@yp@pz@pVlc@rRhClCzKhHjDbJbWrZ~[`k@qs@f]_Uq_AadC',
                schoolId: 2,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            5: {name: 'Inverloch',
                path: 'olgnEzmt`Ou]nToKq]{CyBmChClCvIac@jZ\fJcFmAgEpGyFjG|Wf`@pD{CtCdAtCnFla@eTrVwMsJe[NaDdIsDfKeEpDmAb@?yJcH',
                schoolId: 2,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            6: {name: 'Simpson Cir',
                path: 'oyinEbiw`ObJ_Fvy@{a@gIu_@nWiJvPhRnK|Z}Sdu@~BfJev@tf@ui@abA',
                schoolId: 3,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            7: {name: 'Berkeley',
                path: 'kzinEriw`Okl@iw@qF{K}_@tWjDxJkLrHqJkDMqNyLfBeMr@gQkDuM?gMvBu]jLwLnc@mG~Th`@bAno@d_@bNt^vHpVxHz~@gMlEiH}LkHwI_O~EfIdQj`@tWt]|StQNl[uIxt@{Rw@}LdAiRiDkLMcH~NuHtMyJpFuApNoF|CqNdAcHa_A{|A',
                schoolId: 3,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            8: {name: 'Chattahoochie',
                path: 'wdqnErfx`O~Rmx@pf@uPfU?vPzDr^mELbOvHjDtI_FmC{Kj`@eXc`@{p@yH}Dqf@}EcPcHcTsRqXyY}KsSgUmb@_ImMmaAs|AkJfFaBbA}Iz@{CxJuOQw@a@u]tL?rZbJph@dAnQfEnXMbb@qBb^iBlIqHhNMvBnHpNnIlTpDvc@hLjKtSvQte@xN~RjHpb@xF',
                schoolId: 4,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            9: {name: 'Mason Main',
                path: 'eapnE~gq`O}g@ucAmcAg{Apf@}i@bJ}SvHu_@bJcO|c@oUrYgQxLgJpRQfQ}LfIuP~BwIfaA~c@gEd_@aBzh@uAvv@gIrV{GjSuExJwD~IuAdPqBdTiB~BgUpRqRfM}WpNeAXyHvJ{X`]',
                schoolId: 1,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            10: {name: 'Parson Main',
                path: 'kgmnEjve`O{_@cOwaAyo@wPiKuQoMmGhRuErGgQrAuMrGmAbAcFqC{KnFuCgCmQdIcF|AmKh@iHxBmE~FkBdI[bHmAdEwBjHqDxCZdLZ~BMnFbBtAy@lEi@fFq@~BMhGyDlH`CVlAtDk@bHnUvMrIpGbF|EbJ~[vDnMxDfNhHzNxD`KvTeT|M}OrGeIbHmPjDgN`DcStGiJ|QcLrSiKjRuLhTwM`G{@vHX~BeAjJkHhPg\Cg@',
                schoolId: 11,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            11: {name: 'Burnette Main',
                path: 'ydunE|a_`O}WlTtI~[g]bm@jThCui@|j@yPzYsQre@_GvXqRrW{G`]lSpUlCvJZ~LlK|TpNdW~J~MbNvBlG`GpRbm@p^oM~Pj@~DiJlIkAxJuHqLwXyVyz@{GyG{]}Sd@sI{@oCiCc@MY~DkHDmGxCeP}AkAFaG[kBQmMlCoBzEuNJmGnBwIfCkDlHyEjNmAhL_EhK_FtCzBbLcFbFpCdJkFnDiBzPmApE{FtGaRga@uYuTiP{[cb@u^{h@MG',
                schoolId: 9,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
            12: {name: 'Jackson Main',
                path: '_iinErch`O~VcOzOsjDfMy`CtAio@cNgo@oc@}uAiD`NhDjSuIxh@{_@nTkL?kTbP{WhRyXhC_Wwg@ag@nU_OhReMxJ}_@lEgMnFmk@bOcf@b|@z_@nc@|w@jq@n{@pd@bv@nc@|WhRjt@jStq@b^zLvXMA',
                schoolId: 10,
                students: {
                       es: 128, 
                       ms: 100,
                       hs: 100},
               },
    }

    cities = {
      0: {
        name: 'Duluth',
        path: 'aatnEtts`Oe]bDuKvBuIhGzAxCxFrKzCvMzAjLSlLdCfFlEpG|IpGrElE|GdE~PpGpR|DlKdEpJnChTpC|MdEzO`@pJa@fM`@vJlE`GdErKqG|O_JlMuHbHaD?qCp@kDdCyFxD}EfEyCrE_FbFqC~D_CpDwBtCrH{AlAZbHlCNTeBxNwIk@_ClKyFbDkA_AoB_Cz@_CQeCdA}Az@_C{Gc@Po@wBv@k@v@j@x@FtIqNb@uA`@Y|AyClUcO~LkHpJqGsEyNhPyJwLu[rK{GcFeMa@YcBjAgAuAlAeBqDuHwJrGbD`K`@rDw@qCqFtHzAxCmGfJfEzGmArDuCtEyBlAmEfCuCtAsAz@gA~E{AiGmG`DzEfQLnBw@dEcB|AmAz@}ClEqDmIjFwEDtHp@GlCyBp@}AwFkWq@s@qHpCyBbAqD_CeCs@_Cz@qDaDyHcDpFkDbHvIhFtA~B`@fIuAuAsDoBz@kHcSyJhGeMmIlCoBqD_JmCzD}E\\a@dArA?m@rFp@GEtAkACIxC_CJ{D}Ak@tCeIiBN_F_DhCwEgB~AiGvBkFjBmAp@v@v@e@z@bFxFeGq@sDt@w@KyCf@MtEzEHw@zANPoDmH{B^s@Ym@\\o@PoBQSDaAMCbA{@PiB_D~@_AXgCBiAa@kAbAaAv@g@FHwBtAgAMo@zG]tAGf@a@^yB^wFRqCt@oDcE?iA}CmHzBaAa@e@NG~@wAf@cDwIFi@cDsIvBgA|BlGlGw@mAwBpBaBk@s@lD{Bb@l@bAw@iBiEhDiB{@wBvA{@f@dB~BkB{@}CpBmAv@dC~GwFqD_QuN`EcIp@sF{O_FdEyE_J_EQyAv@{AcDcB~AW?gGnD[UWv@kA\\cDoIbAi@c@kBeBz@_CcGdHeEfGmCtCa@vDuAfF]q@yFbBsDqLoLg@bCStC_AhA}BlGwJsFmJcFoBrFe@xFgCoD_ItCcG|C{BpAwAtA}@zBiBzBgHrG|C|EoBhCfDlElAyAxLXP_BkAwD~Bs@|@fB?jBY|CuA~BmB~AsB|AkAvBw@|A}BbAoCqGcLcSqDtAuEhAu@BIzFzLxUsApAcDcFcA}AiC}AcCoBpAsD_HyJiLiOjDa@oPgYsE{K~MuHhPh[pYePeA{B_BwGgF}WpAsByByG{H~BiMvDgBf@cVvHcHsS_FdBiCmOuC}JcH_\\sFo\\{EdBgE`CGtE{ApCcDtAaFPc@|E~JnFvJfFxDjDdErDtCbDpBbHbDzKdCpKfCpJ{GpCvVlX_CzCeEp@k@yCwBr@gCpCStEhDvB_AxFyD`GmMVjBbHnBpJb@hGbBrKF|AyVtE~@dEfEr@`BV[fB{CXw@XrAtE_OvFb@rGD|Ej@|HrAdE~@jH`AfJDvIc@rKq@hOw@~Ii@`Gc@xClMmBpDuAvDYxD`@lCYtIlAv@CzDc@fFm@xDa@v@IfQyL`DC|CoBpJkFd@z@s@v@hBxF{@XmB|CrAjD_GjJf@dEcCTQxApA~@_FzBmCaG_BfB~ClGbAj@~@~FqAHy@fC{FLf@`@uC|AdBzGe@X{C_Bv@aKGa@b@w@SYz@{BgAwBbBoDuBiK_F~BiE~@cDhAcDtAkDhAA?'
      }
    }

                                                  
    configureHoods();

    for (var key in hoods) {
        hood = hoods[key] 
        school = schools[hood.schoolId]
        p = google.maps.geometry.encoding.decodePath(hood.path);
        poly = new google.maps.Polygon({
	    path: p,
	    strokeColor: school.color,
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: school.color,
            fillOpacity: 0.35,
            zIndex: 10,
        });
        poly.setMap(map);
        clos = function() {
          var h = hood
          var p = poly
          return function(event) {
            handleHoodClick(event, h, p);
        }}
        google.maps.event.addListener(poly, 'click', clos());
        displays.hood.polies.push(poly)
    }
    for (var key in cities) {
        city = cities[key] 
        p = google.maps.geometry.encoding.decodePath(city.path);
        poly = new google.maps.Polygon({
	    paths: p,
	    strokeColor: "#333333",
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: "#333333",
            fillOpacity: 0.35,
            zIndex: 0,
        });

        poly.setMap(map);
        clos = function() {
          var h = city
          var p = poly
          return function(event) {
            handleCityClick(event, h, p);
        }}
        google.maps.event.addListener(poly, 'click', clos());
        displays.city.polies.push(poly)
    }
   
    for (var key in schools) {
        school = schools[key]
        marker = new google.maps.Marker({
             position: school.position,
             title: school.name
        });
        marker.setMap(map);
        clos = function() {
          var s = school
          var m = marker
          return function(event) {
            handleSchoolClick(event, s, m);
        }}
        google.maps.event.addListener(marker, 'click', clos());

    }

    infowindow = new google.maps.InfoWindow();

}

  function showInfoHood(event, hood, poly) {

  var contentString = "<b>" + hood.name + "</b><br />";
  //contentString += "Clicked Location: <br />" + event.latLng.lat() + "," + event.latLng.lng() + "<br />";
  contentString += "School: " + schools[hood.schoolId].name + "<br />";
  contentString += "ES: " + hood.students.es + "<br />";
  contentString += "MS: " + hood.students.ms + "<br />";
  contentString += "HS: " + hood.students.hs + "<br />";

  showInfo(event.latLng, contentString);
  }

  function showInfoSchool(event, school, marker) {
    var contentString = "<b>" + school.name + "</b><br />";
    showInfo(marker.position, contentString);
  }
  function showInfoCity(event, city, poly) {
    var contentString = "<b>" + city.name + "</b><br />";
    showInfo(event.latLng, contentString);
  }

  function showInfo(latLng, str) {
    infowindow.setContent(str);
    infowindow.setPosition(latLng);

    infowindow.open(map);
  } 

  function handleCityClick(event, city, poly) {
    showInfoCity(event, city, poly);
  }
  function handleHoodClick(event, hood, poly) {
    showInfoHood(event, hood, poly);
  }
  function handleSchoolClick(event, school, marker) {
    showInfoSchool(event, school, marker);
  }
  function toggle(display) {
    display.shown = !display.shown
  }
  function draw(display) {
    arr = display.polies 
    for (var i = 0; i < arr.length; i++) {
      p = arr[i];
      if (display.shown) {
        p.setMap(map);
      } else {
        p.setMap(null);
      }
    }
  }
  function toggleHoods() {
    toggle(displays.hood);
    draw(displays.hood)
  }
  function toggleCities() {
    toggle(displays.city);
    draw(displays.city)
  }
