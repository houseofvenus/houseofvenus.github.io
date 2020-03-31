# House of Venus
## a MD-Benefit Corporation providing city-as-a-service infrastructure for communities in the United States and abroad.
### Patrice-Morgan ONGOLY [@starmaker2130](https://github.com/starmaker2130) , ceo/chairman
### Beatrice GOMA [] , member of board (kdf)

## Getting Started
### View the master branch of our landing page and connect to HoV services:

* pARk: @home
* WWW: http://www.houseofven.us/

### Review the introduction to principles of ATOWN and programming in Lyoko:

pARk
1. Tap ARia and ask for a new town ("Add a new town to the scene", "Build me a new town", "May I have a blank city please", etc.)

WWW
1. Open your Terminal (on Mac/Linux) or your PowerShell (Windows) console
2. Make a new directory named "atown"
3. In you console enter: cd ./atown
4. Then: git clone https://github.com/houseofvenus/mytown.git

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
Only AWS is currently supported as a deployment target. Supporting other platforms is an open issue; contact branch manager for more info.



## Contributors
* @starmaker2130
* @ericrom1228
* @bgoma

Built With:
* C/C++
* Python
* JavaScript
* Lyoko

Using:
* Brackets IDE
* CodeLyoko IDE
* XCode IDE
* MacBook Pro (2019) running macOS Mojave v. 10.14.6
* ARia prototype II and accompanying prototype controller (2018) running CLOSED v. 0.0.199


## License
