## Don't Be an Asshole
[![Build Status](https://secure.travis-ci.org/deepsweet/dba.png)](https://travis-ci.org/deepsweet/dba) <a href="http://badge.fury.io/js/dba"><img src="https://badge.fury.io/js/dba@2x.png" alt="NPM version" height="18"></a> [![Dependency Status](https://gemnasium.com/deepsweet/dba.png)](https://gemnasium.com/deepsweet/dba) [![license MIT](http://b.repl.ca/v1/license-MIT-brightgreen.png)](https://github.com/deepsweet/dba/blob/master/LICENSE)

### Intro
If you write a complex open-sourced JS code and don't comment it well, then you are an asshole. That's it.

### What
DBA is an experimental tool which is trying to determine a complex JS functions with very low `comments / logical lines of code` ratio.

### How
```sh
$ npm i dba
```

```
 Usage: dba [options] <file>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    --effort <n>   minimum function Halstead Programming Effort (default: 1000)
    --ratio <n>    minimum function `comments count / logical sloc` ratio (default: 0)
```

So, you can operate with two options:

#### effort:

```
Halstead's formulation for the effort required to author (or understand) a
program characterizes effort as proportional to both difficulty and volume.
```

Default value is `1000`. Why? I don't know. You can (and probably must) choose your own value. Read more about [Halstead Metrics](http://www.grammatech.com/codesonar/metrics/halstead).

#### ratio:

```
ratio = comments / logical lines of code (count of the imperative statements)
```

Default value is `0`, i.e. functions without any comments above or inside them.

### Try it

```sh
$ npm i -g dba
$ curl http://code.jquery.com/jquery-2.0.3.js -o jquery.js
$ dba jquery.js
```

```
line:name effort
259:eq 2463.4990140857967
636:merge 5604.019067420871
848:isArraylike 4531.773550138875
1536:<anonymous> 3545.3416830596843
1888:<anonymous> 1257.7999892502814
1899:<anonymous> 14657.936450339506
2031:<anonymous> 1316.1630348826093
2104:<anonymous> 3088.7749214053893
2129:<anonymous> 1000.1639924757808
2230:<anonymous> 1461.2679657469964
2238:<anonymous> 1300
2404:condense 4301.781429421212
2532:<anonymous> 1088.3504253764434
2826:<anonymous> 1437.041091550048
3146:<anonymous> 1597.4865292825052
3947:hasClass 3499.7543832579354
5252:add 2166.3947815907463
5341:filter 3509.9700124673077
5355:dir 2730.587439587538
5370:sibling 1539.077237214529
5966:getAll 3010.733942522896
6169:<anonymous> 5234.617404043934
6528:set 1268.8883720745803
6644:<anonymous> 1842.172433325465
6849:<anonymous> 1725.8559825284208
8076:tweener 3958.887401782952
8234:init 1529.9625455901264
8250:run 9362.395485529289
8711:<anonymous> 1614.2124551085624
8729:<anonymous> 2357.9244683544707
```

### Tools
* [esprima](https://github.com/ariya/esprima)
* [escomplex](https://github.com/philbooth/escomplex)
* [escomplex-ast-moz](https://github.com/philbooth/escomplex-ast-moz)

### License
[MIT](https://github.com/deepsweet/dba/blob/master/LICENSE)
