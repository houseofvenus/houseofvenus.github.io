# BARS And Restaurants (B.A.R.s)
## a DIA for exploring local dining venues and evening entertainment options
### Patrice-Morgan ONGOLY [@starmaker2130](https://github.com/starmaker2130)
### Minu BIDZIMOU
### Elven

## Getting Started
### To view the master branch of the app deployed by HoV do the following:

* pARk: @bars
* WWW: http://houseofven.us/bars

### To install a local copy and start developing do the following:

1. Open your Terminal (on Mac/Linux) or your PowerShell (Windows) console
2. Make a new directory named "bar"
3. In you console enter: cd ./bar
4. Then: git clone {input url corresponding to languages desired, see list below}

* For Lyoko+JS:  https://github.com/houseofvenus/bar.git
* For JavaScript only: https://github.com/houseofvenus/bar-js.git
* For Lyoko only: https://github.com/houseofvenus/bar-lyoko.git

## Testing

### Static code analyses
* Key Exposure - a security vulnerability that may expose your service key to the public, when deploying your application make sure the key request is conducted through an authenticated process so as to not expose it to the public who may use it for their own purposes and spike your request count

* Button Breaks - all buttons should have event listeners, buttons that act on an object need to be paired weith another button that reverses said action on the object (i.e. users should be able to turn back from "dead ends")

### Unit Testing
* node addition test - when adding a new location does it behave as it should (see default marker behavior)?

### Style testing
* map styling - is the full range of map styling working as expected?

## Deployment
### If deploying to AWS:
1. follow the multi-cluster-packaging instructions or in your console run: ./pack-multi-cluster.sh
2. if on Mac/Linux run: zip ../deploy.zip -r * .[^.]* ; if on Windows open the "multi-pack-cluster" folder location in File Explorer, select all the contents, right click, then select zip.
3 login to your AWS console
4. Select the Elastic Beanstalk service on the Dashboard.
5. Create a new Environment
6. Start a enw Application; make it a web environment.
7. Select Node.js from the Pre-confiogured platform menu
8. Select upload local file.
9. Browse for and select "deploy.zip"
10. Upload the package and wait for the service to start

### If deploying to some other system:

Built With
* ATOWN
* Brackets

## Contributors

## License
