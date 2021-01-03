<BlogMetaDecorator folder="throttlingMacBook" image="leftFanBottomRight.jpg" imageAlt="MacBook Pro 16 Left Fan with some dust" description="Reviews said this laptop had better thermals compared to the previous generation. Mine had great thermals too, up until today." title="CK - Throttling MacBook Pro 16" />

# The Curious Case of a Throttling 16" MacBook Pro

### Reviews said this laptop had better thermals compared to the previous generation. Mine had great thermals too, up until today.

######April 13, 2020 - 5 min read

Tools Used: `A pentalobe screwdriver`, `A brush`

After 6 years with a Late 2013 Retina MacBook Pro 15", I finally bought a 16" MacBook Pro in December 2019. I got it mainly for the 8 core processor and Thunderbolt 3.

After using it for about 4 months, I've started noticing major slowdowns. If I pushed the CPU for longer 
than 10 minutes while hooked up to an external monitor, I would start getting very heavy throttling on the
 CPU. While rendering videos, the CPU would even throttle down to 1GHz on all cores. There was something
  wrong, and I had to find it!
  
<MediaCarousel folder="throttlingMacBook" images="throttling.png"/>

At first, I thought it could be dust accumulating around the fans, but how can a 4 month old laptop get so much dust that it would throttle this badly? It couldn't have been dust. The laptop was too new to get that much dust in it. I've used my previous 2013 MacBook Pro 15" in the same room everyday for more than 6 months. It was clean inside when I opened it.

So I did some reseach online to see if others were having similar issues. I tried resetting the [PRAM, NVRAM](https://support.apple.com/en-gb/HT204063) and [SMC](https://support.apple.com/en-gb/HT201295) per Apple's guidelines. However, the problem persisted.

Then I thought maybe I had a  bad thermal paste application coming from the factory and it just got worse over the last 4 months. I've opened my laptop to replace the thermal paste and saw this:

 <MediaCarousel folder="throttlingMacBook" images="leftFanLeftSide.jpg,leftFanBottomRight.jpg,bottomCoverOff.jpg,rightFanBottomLeft.jpg,rightFanTopDown.jpg"/>

Even though there isn't much dust elsewhere on the laptop, a perfect circle of dust formed on the tip of the fan blades, blocking almost all of the airflow. I've opened plenty of MacBooks in the past, but I've never seen this kind of dust formation before. It might be related with the new fan blade design on the 16" MacBook Pro. Maybe this design is more susceptible to dust formation.

I picked up a brush and cleaned it off. Put the cover and the screws back in. Problem solved. No more throttling.

Moral of the story is: 

####Clean your laptop

Get the tools required and just do it yourself (or find a friend who can do it for you).


