
---
layout: post
title: You're up and running!
---

# 1-Initial Recon:
## nmap Tcp service scan :
> Nmap scan report for 10.10.10.154<br/>
> Host is up (0.15s latency).<br/>
> Scanned at 2020-03-06 07:28:33 CET for 73s<br/>
> Not shown: 996 filtered ports<br/>
> PORT     STATE SERVICE      VERSION<br/>
> 80/tcp   open  http         Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)<br/>
> | http-methods:
> |_  Supported Methods: GET HEAD POST OPTIONS<br/>
> |_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4<br/>
> |_http-title: E-coin<br/>
> 443/tcp  open  ssl/http     Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)<br/>
> | http-methods:<br/>
> |_  Supported Methods: GET HEAD POST OPTIONS<br/>
> |_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4<br/>
> |_http-title: E-coin<br/>
> | ssl-cert: Subject: commonName=localhost<br/>
> | Issuer: commonName=localhost<br/>
> | Public Key type: rsa<br/>
> | Public Key bits: 1024<br/>
> | Signature Algorithm: sha1WithRSAEncryption<br/>
> | Not valid before: 2009-11-10T23:48:47<br/>
> | Not valid after:  2019-11-08T23:48:47<br/>
> | MD5:   a0a4 4cc9 9e84 b26f 9e63 9f9e d229 dee0<br/>
> | SHA-1: b023 8c54 7a90 5bfa 119c 4e8b acca eacf 3649 1ff6<br/>
> | -----BEGIN CERTIFICATE-----<br/>
> | MIIBnzCCAQgCCQC1x1LJh4G1AzANBgkqhkiG9w0BAQUFADAUMRIwEAYDVQQDEwls<br/>
> | b2NhbGhvc3QwHhcNMDkxMTEwMjM0ODQ3WhcNMTkxMTA4MjM0ODQ3WjAUMRIwEAYD<br/>
> | VQQDEwlsb2NhbGhvc3QwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMEl0yfj<br/>
> | 7K0Ng2pt51+adRAj4pCdoGOVjx1BmljVnGOMW3OGkHnMw9ajibh1vB6UfHxu463o<br/>
> | J1wLxgxq+Q8y/rPEehAjBCspKNSq+bMvZhD4p8HNYMRrKFfjZzv3ns1IItw46kgT<br/>
> | gDpAl1cMRzVGPXFimu5TnWMOZ3ooyaQ0/xntAgMBAAEwDQYJKoZIhvcNAQEFBQAD<br/>
> | gYEAavHzSWz5umhfb/MnBMa5DL2VNzS+9whmmpsDGEG+uR0kM1W2GQIdVHHJTyFd<br/>
> | aHXzgVJBQcWTwhp84nvHSiQTDBSaT6cQNQpvag/TaED/SEQpm0VqDFwpfFYuufBL<br/>
> | vVNbLkKxbK2XwUvu0RxoLdBMC/89HqrZ0ppiONuQ+X2MtxE=<br/>
> |_-----END CERTIFICATE-----<br/>
> |_ssl-date: TLS randomness does not represent time<br/>
> | tls-alpn:<br/>
> |_  http/1.1<br/>
> 445/tcp  open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)<br/>
> 3306/tcp open  mysql        MariaDB (unauthorized)<br/>
> Service Info: Host: BANKROBBER; OS: Windows; CPE: cpe:/o:microsoft:windows<br/>
> Host script results:<br/>
> |_clock-skew: mean: 1h02m04s, deviation: 0s, median: 1h02m04s<br/>
> | p2p-conficker:<br/>
> |   Checking for Conficker.C or higher...<br/>
> |   Check 1 (port 26952/tcp): CLEAN (Timeout)<br/>
> |   Check 2 (port 18812/tcp): CLEAN (Timeout)<br/>
> |   Check 3 (port 52758/udp): CLEAN (Timeout)<br/>
> |   Check 4 (port 46700/udp): CLEAN (Timeout)<br/>
> |_  0/4 checks are positive: Host is CLEAN or ports are blocked<br/>
> |_smb-os-discovery: ERROR: Script execution failed (use -d to debug)<br/>
> | smb-security-mode:<br/>
> |   account_used: guest<br/>
> |   authentication_level: user<br/>
> |   challenge_response: supported<br/>
> |_  message_signing: disabled (dangerous, but default)<br/>
> | smb2-security-mode:<br/>
> |   2.02:<br/>
> |_    Message signing enabled but not required<br/>
> | smb2-time:<br/>
> |   date: 2020-03-06T07:31:11<br/>
> |_  start_date: 2020-03-06T06:06:14<br/>
> Read data files from: /usr/bin/../share/nmap<br/>
> Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .

![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub.
