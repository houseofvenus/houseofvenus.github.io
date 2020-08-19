# Foodid: aerial grocery and pharmacy deliveries
#### DIA version: 0.4.2.2
#### Authors: Patrice-Morgan ONGOLY [@starmaker2130](https://github.com/starmaker2130)


## Getting Started
### To view the master branch:

* pARk: @foodid
* WWW: http://houseofven.us/foodid


### To install a local copy and start developing do the following:

1. Open your Terminal (on Mac/Linux) or your PowerShell (Windows) console
2. Make a new directory named "foodid"
3. In you console enter: cd ./foodid
4. Then: git clone {input url corresponding to languages desired, see list below}
5. Run install script (TODO: Add detailed instructions on this section)

* For Lyoko+JS:  https://github.com/houseofvenus/foodid.git
* For JavaScript only: https://github.com/houseofvenus/foodid-js.git
* For Lyoko only: https://github.com/houseofvenus/foodid-lyoko.git

## Deployment
### If deploying to HOV:
1. Tap your cARd to your Viewer

### If deploying to AWS:
1. Follow the multi-cluster-packaging instructions or in your console run: ./pack-multi-cluster.sh
2. If on Mac/Linux run: zip ../deploy.zip -r * .[^.]* ; if on Windows open the "multi-pack-cluster" folder location in File Explorer, select all the contents, right click, then select zip.
3. Login to your AWS console
4. Select the Elastic Beanstalk service on the Dashboard.
5. Create a new Environment
6. Start a new Application; make it a web environment.
7. Select Node.js from the Pre-confiogured platform menu
8. Select upload local file.
9. Browse for and select "deploy.zip"
10. Upload the package and wait for the service to start

## Contributions
Built With
* ATOWN
* Brackets

By
* Patrice-Morgan Ongoly
* Eulalie Goma
* Minu Bidzimou

## License
* HOV-2 License