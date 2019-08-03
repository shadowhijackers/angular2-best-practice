# DEPLOYMENT  
    Now currenetly documented for deployment for NGINX server in linux platform  

# Take a build
    ng build --prod --configuration=production 

# Install NGINX if its not already available
    
   1. [For Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)
   2. [For Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04-quickstart)
   3. [Official NGINX Installation Guide](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)
   
# Setup the NGINX Configuration
   
     1. configure the nginx server configuration file as per here nginx.default.conf  
        in /etc/nginx/sites-available/ (file name is default)
     
     2. move the build file into var/www/html/
     
Now check your server, it will work

`Note: There is HTTP configuration only in this nginx.default.conf
if you want enable HTTPS you need to add some code in default conf file.`
                
           
