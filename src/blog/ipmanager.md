<BlogMetaDecorator folder="ipmanager" image="ipmanagerUpdate.png" imageAlt="a screenshot of IPManager app" description="Switching between DHCP and static IP when you switch networks in Windows" title="CK - IPManager" />

# IPManager - Switch Between DHCP and Static IP Easily

### Coming back to C# after a long break

######December 07, 2019 - 5 min read

Technologies Used: `Microsoft Visual Studio`, `C# .NET`, `WPF`

[Download](https://sites.google.com/site/celikkoseoglu/home/IPManager.zip?attredirects=0&d=1) For: `Windows 7`

My parents' workplace uses static IP. The reason is some printers are old and have to be manually assigned static
addresses on the network. Each time I went there or my dad came home with his laptop, we had to manually set IP settings 
again and again. At the time, I was looking for a simple challenge and wanted to create an app that takes care of this
problem for us. This is how I made IPManager.

It was written using C# .NET and this was the first time I was calling Windows APIs to retrieve configuration about the
machine the app was running on. It was easily ten times more challenging than QNote, but my knowledge was vastly improved
after years of reading programming books and making apps.

In about two weeks, I've finished it. Instead of opening the IPv4 settings menu under Network and Sharing Center, you could
enter the details here and click apply. Here is a tweet of mine from years ago with a screenshot:

 <MediaCarousel folder="ipmanager" images="ipmanagerRelease.png"/>

My dad started using it together with some of his colleagues. Several months later, I received some feedback saying I should
add a `save current config` functionality so instead of entering the same ip addresses every time, the app would remember
settings for individual networks. Here is how it looked after the `save` functionality.

 <MediaCarousel folder="ipmanager" images="ipmanagerUpdate.png"/>

People liked it but I've never published this app in a major store. I wasn't sure if this was a widespread problem. It is
still available for download on my [google site](https://sites.google.com/site/celikkoseoglu/). I don't know if it would work with Windows 10 or not, but you can go ahead and try.