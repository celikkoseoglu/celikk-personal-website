<BlogMetaDecorator folder="rockyJourney" image="rockyJourneyObstacles.png" imageAlt="Rocky Journey project logo" description="Flappy bird on an 8x8 LED Matrix" title="CK - Rocky Journey" />

# Rocky Journey

#### Flappy bird on an 8x8 LED Matrix

######February 02, 2020 - 4 min read

Technologies Used: `XILinx ISE Design Suite`, `Verilog`, `Spartan 3E FPGA Board`

Download Project Files and Reports: [GitHub](https://github.com/celikkoseoglu/Rocky-Journey)

There were 3 classes in uni that I enjoyed more than the rest. This blog post is
about one of the projects we've done in CS223 - Digital Design.

As a final project for this class, we were asked to make something with an FPGA
board. We were allowed to choose our own project. So, me and my friend choose to make a game
using the [Spartan-IIE](https://www.xilinx.com/support/documentation/data_sheets/ds077.pdf).
Here is a link to [my friend's GitHub repo](https://github.com/berkevren).

This game was basically a clone of the very popular mobile game [Flappy Bird](https://flappybird.io/)
using an 8x8 LED Matrix. The obstacles were going to move right to left, one column per second.
As a player, your job was to evade them by pressing the up and down buttons that were attached to
the FPGA board. Figures below should give you an idea.

 <MediaCarousel folder="rockyJourney" images="rockyJourneyObstacles.png"/>

Of course, since it was a uni project, it involved lots of academic reports. That sounds very
boring though, so we had to add a bit of creativity to keep awake during the whole process.
I've designed the logo and my friend wrote the following project description:

> Set sail on an intense journey riding on your mighty cruise, the sky is blue, the birds
> are singing songs of joy, the ocean waveless. Until... Rocks challenging the might of your
> ship are along your path, causing every bit of trouble they can to prevent you the fun of
> a carefree journey. As the courageous captain you are, your friends and family along the
> cruise are looking up to you for a chance to return home, hopefully still in one piece.
> Guide your ship through the reckless waves of the unforgiving ocean, and try to survive the
> endless wreckage of spines of stones, and maybe, the dreams of those you care might be seen fulfilled.

 <MediaCarousel folder="rockyJourney" images="RockyJourney.svg"/>

I'm not going to say we've done everything properly, but we managed to provide a solution that
works. Given tight deadlines, we had to make some trade-offs. Most of the code
doesn't respect good programming practices and finite state machine diagrams that we have in
the reports don't match the code.

Moral of the story is:

####A solution that works is better than no solution.

Solve the problem first, optimize later. One step at a time.