# calypso

## Server Setup

This section is meant to describe how to go about initializing a new droplet.

NOTE: This assumes we're using CentOS. Commands will change slightly when using Ubuntu.

### Add users

1. Login to the server (If this is the first time logging in as root you will need to change the password).

```bash
ssh root@x.x.x.x
```

2. Once logged in as root, run the `adduser` command

```bash
adduser $username
```

3. Set an initial password for the user

```bash
passwd $username
```

4. If you want the user to be able to run sudo commands

```bash
gpasswd -a $username wheel
```

### Install Git and clone source code

1. Setup password file. It's expected that the iuclid password will live in `/home/iuclid/iuclid-password.txt`

```bash
vi /home/iuclid/iuclid-password.txt
_ENTER THE PASSWORD_
:wq
```

2. Install Git

```bash
sudo yum install git
```

3. Clone the repository

```bash
su iuclid
cd /home/iuclid
mkdir git
cd git
git clone https://github.com/meulmeesters/calypso.git
/home/iuclid/git/calypso/scripts/deploy.sh
```

If Nginx is not installed yet you'll see errors since the deploy script tries to restart it. This is fine, just move on.

NOTE: If there are 403 errors you need to make sure that all files have read/write for all users and all folders have read/write/execute within `/home/iuclid/client` so that Nginx can serve all of the files.

### Setup Nginx

1. Install Nginx and start it up:

```bash
sudo yum install epel-release
sudo yum install nginx
sudo setenfore Permissive
sudo systemctl start nginx
```

Assuming there were no errors with any of the commands you should now be able to see the default page by navigating to: `http://X.X.X.X` where `X.X.X.X` is the IP Address of the droplet.

2. Setup the conf file. The conf file is located in the repository at `/conf/iuclid.confg`, copy this file to the proper location:

```bash
sudo cp /home/iuclid/git/calypso/conf/iuclid.conf /etc/nginx/conf.d/
```

3. Restart Nginx

```bash
sudo systemctl restart nginx
```

## Enable Monitoring on DigitalOcean

SSH to the droplet and `su` to root. Then run:

```bash
curl -sSL https://agent.digitalocean.com/install.sh | sh
```

## SSL Certificate Renewal
If using [CertBot](https://certbot.eff.org/#centosrhel7-nginx) to manage SSL Certificates issued through Let's Encrypt follow the instructions below. If we're using Cloudflare then this isn't required.
More information can be found at that link, but to renew just log into the Digital Ocean server and run:

```bash
certbot renew
```

It's probably a necessary to restart nginx afterwards as well:

```bash
sudo systemctl restart nginx
```
