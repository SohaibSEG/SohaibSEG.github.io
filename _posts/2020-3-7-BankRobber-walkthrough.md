
---
layout: post
title: You're up and running!
---

# 1-Initial Recon:
## nmap Tcp service scan :
> Nmap scan report for 10.10.10.154
> Host is up (0.15s latency).
> Scanned at 2020-03-06 07:28:33 CET for 73s
> Not shown: 996 filtered ports
> PORT     STATE SERVICE      VERSION
> 80/tcp   open  http         Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)
> | http-methods:
> |_  Supported Methods: GET HEAD POST OPTIONS
> |_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4
> |_http-title: E-coin
> 443/tcp  open  ssl/http     Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)
> | http-methods:
> |_  Supported Methods: GET HEAD POST OPTIONS
> |_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4
> |_http-title: E-coin
> | ssl-cert: Subject: commonName=localhost
> | Issuer: commonName=localhost
> | Public Key type: rsa
> | Public Key bits: 1024
> | Signature Algorithm: sha1WithRSAEncryption
> | Not valid before: 2009-11-10T23:48:47
> | Not valid after:  2019-11-08T23:48:47
> | MD5:   a0a4 4cc9 9e84 b26f 9e63 9f9e d229 dee0
> | SHA-1: b023 8c54 7a90 5bfa 119c 4e8b acca eacf 3649 1ff6
> | -----BEGIN CERTIFICATE-----
> | MIIBnzCCAQgCCQC1x1LJh4G1AzANBgkqhkiG9w0BAQUFADAUMRIwEAYDVQQDEwls
> | b2NhbGhvc3QwHhcNMDkxMTEwMjM0ODQ3WhcNMTkxMTA4MjM0ODQ3WjAUMRIwEAYD
> | VQQDEwlsb2NhbGhvc3QwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMEl0yfj
> | 7K0Ng2pt51+adRAj4pCdoGOVjx1BmljVnGOMW3OGkHnMw9ajibh1vB6UfHxu463o
> | J1wLxgxq+Q8y/rPEehAjBCspKNSq+bMvZhD4p8HNYMRrKFfjZzv3ns1IItw46kgT
> | gDpAl1cMRzVGPXFimu5TnWMOZ3ooyaQ0/xntAgMBAAEwDQYJKoZIhvcNAQEFBQAD
> | gYEAavHzSWz5umhfb/MnBMa5DL2VNzS+9whmmpsDGEG+uR0kM1W2GQIdVHHJTyFd
> | aHXzgVJBQcWTwhp84nvHSiQTDBSaT6cQNQpvag/TaED/SEQpm0VqDFwpfFYuufBL
> | vVNbLkKxbK2XwUvu0RxoLdBMC/89HqrZ0ppiONuQ+X2MtxE=
> |_-----END CERTIFICATE-----
> |_ssl-date: TLS randomness does not represent time
> | tls-alpn:
> |_  http/1.1
> 445/tcp  open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
> 3306/tcp open  mysql        MariaDB (unauthorized)
> Service Info: Host: BANKROBBER; OS: Windows; CPE: cpe:/o:microsoft:windows
> Host script results:
> |_clock-skew: mean: 1h02m04s, deviation: 0s, median: 1h02m04s
> | p2p-conficker:
> |   Checking for Conficker.C or higher...
> |   Check 1 (port 26952/tcp): CLEAN (Timeout)
> |   Check 2 (port 18812/tcp): CLEAN (Timeout)
> |   Check 3 (port 52758/udp): CLEAN (Timeout)
> |   Check 4 (port 46700/udp): CLEAN (Timeout)
> |_  0/4 checks are positive: Host is CLEAN or ports are blocked
> |_smb-os-discovery: ERROR: Script execution failed (use -d to debug)
> | smb-security-mode:
> |   account_used: guest
> |   authentication_level: user
> |   challenge_response: supported
> |_  message_signing: disabled (dangerous, but default)
> | smb2-security-mode:
> |   2.02:
> |_    Message signing enabled but not required
> | smb2-time:
> |   date: 2020-03-06T07:31:11
> |_  start_date: 2020-03-06T06:06:14
> Read data files from: /usr/bin/../share/nmap
> Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .

![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub.
