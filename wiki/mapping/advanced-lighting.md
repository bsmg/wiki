---
sidebar: auto
prev: ./intermediate-lighting.md
next: ./extended-lighting.md
description: Learn about taking your lighting up to 11.
---
# Advanced Lighting
_You've dived into lighting and now you want to take it to the next level._

::: warning
This is a stub page, content is a work in progress! Ask in `#mapping-discussion` if you want more info!
:::

## Advanced Static Event System Techniques

### Double Duty Lasers
You can overlap two laser "tracks" by using multiple colors in different patterns for an appearance of double the number
of available laser types. Where the music supports it, you can help differentiate the two patterns by contrasting them in
other ways, such as strobing one while leaving the other solid, or maintaining one color at speed 0 while keeping the
other one moving.

Start by mapping out the most prominent, consistent, or complex pattern (whichever pattern you feel needs to be mapped most
faithfully), then carefully craft the second pattern so the two never need to use the same specific laser at the same time.
Worst case scenario, if you need to briefly overlap the two patterns, you can simply strobe the colors on the overlapping
laser for a beat; be aware that sustaining this overlap will eventually disrupt the effect.

* Examples at ~1:52 and ~2:50:  
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### Higher Impact Full On/Off Moments
Stagger timing for the on/off events across the light types when turning on all the lights for a big hit to create a punchier
feeling as well as introduce a sense of movement.

Instead of flashing or fading all lights simultaneously, flash them on in very fast front-back or back-front sequence, at
1/16 intervals or so; these can end in fades, with simultaneous offs, or similarly cycled offs at the same interval or
often half/double that.

Front-back position varies by environment, and it can be a bit ambiguous with the rings and Center Lights (BBS) often
covering the entire length, but in Big Mirror, Default, and Triangle environments:

* Center Lights (BBS) appears to be the furthest back,
* Then back-top,
* Then side lasers,
* Finally, the rings appear the closest to the player.

Examples:

* Several distinctly timed examples starting at ~0:18:  
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)
* A harder-hitting example at ~1:33:  
  [Streamable](https://streamable.com/7tk24) | [BeatSaver](https://beatsaver.com/beatmap/44f4)

### Drumrolls
In many environments, if you stagger speed 0 laser strobes for brief periods interspersed with pauses, the lasers vaguely
resemble rolling drumsticks; be aware that maintaining such a pattern for longer periods will result in more of a spin
appearance, which is useful in other contexts but less-so for drumrolls.

Mix in back-top or other compatible light types to control the speed of the roll and manage which "hand" each roll will
end on as seems appropriate to the music.

* Example at ~2:23:  
  [Streamable](https://streamable.com/0qsto) | [BeatSaver](https://beatsaver.com/beatmap/7be2)

### "Singing" Inner Rings

If you strobe inner ring zoom at varying frequencies (~1/4-~1/16 depending on pitch and tempo), you can produce an effect
where the inner rings appear to "sing" the vocal melody.

Of the base-game environments, this tends to work best in DefaultEnvironment, as the TriangleEnvironment inner rings have
a less appropriate shape for the purpose, and the NiceEnvironment inner rings are prohibitively difficult to keep lit
sufficiently for the effect to be noticeable.

Maintaining sufficient inner ring lighting in DefaultEnvironment is not difficult, but you should ideally leave the ring
lights, Center Lights (BBS), or both On for the duration of the effect, since more dynamic lighting tends to mask it.
Similarly,avoid using ring spins throughout the duration, since the effect becomes nearly unnoticeable while the inner
rings are in motion.

* Examples at ~0:30, ~1:39, and ~2:20:  
  [Streamable](https://youtu.be/YqM_eXIh2Sg) | [BeatSaver](https://beatsaver.com/beatmap/7be1)

### Wind-Up, Wind-Down
Gradually decreasing/increasing interval for laser spins is great for wind up/wind down sounds.

For example, start around 1/16, 1/17, 1/18... 1/32, or even all the way to 1/64 if the tempo supports it (beware of odd
artifacts at typical speeds, though). Depending on what the music is winding up to, you can end it there, follow up with
a rotating laser (looks like the momentum from the spin is transferred to the rotation), etc. If you wind up to a bass hit,
following up with a shorter spin down in the opposite direction and at slower speeds, it looks like the spinning light
hits a wall of sorts, loses most of its momentum, and bounces back.

The exact starting and ending intervals (on the interval change between events) should be adjusted depending on the nature
and duration of the associated sound, and keep in mind you can set intervals to decimals for a change of .5 (for example)
with each event.

* Wind-Down example ~1:03, Wind-Up with bounce back ~2:18:  
  [Streamable](https://streamable.com/zx1sf) | [BeatSaver](https://beatsaver.com/beatmap/5bb2)

## Credits
The content on this page was authored by [LittleAsi](./mapping-credits.md#littleasi), [Puds](./mapping-credits.md#puds),
[Skeelie](./mapping-credits.md#skeelie), and [Bullet](./mapping-credits.md#bullet).
