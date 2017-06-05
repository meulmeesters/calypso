# calypso

## SSL Certificate Renewal
We're using [CertBot](https://certbot.eff.org/#centosrhel7-nginx) to manage SSL Certificates.
More information can be found at that link, but to renew just log into the Digital Ocean server and run:

```bash
certbot renew
```

It's probably a necessary to restart nginx afterwards as well:

```bash
nginx -s reload
```

### TODO
long term or short term toxicity to fish
