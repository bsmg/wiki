---
sidebar: auto
prev: ./basic-audio.md
next: false
---
# Advanced Audio Editing
_Diving deeper into audio editing_

**Content in this section is derived from original guides by n3tman and LittleAsi, edited by Kolezan. Many thanks to contributors from across the mapping community who made this expanded wiki possible!**
* [Frequently Asked Questions](/mapping/faq.md)
* [Glossary of Terms](/mapping/glossary.md)

On this page you will find additional guides and resources for better understanding audio or more advanced techniques of editing audio.

## Checking Audio Quality
Generally, as a rule, always use **WAV(E) or FLAC (lossless uncompressed or compressed)** files as sources for your songs. This is because **lossy formats like MP3, AAC or OGG always lose information when converted to their formats** and cannot be restored by 'un-converting'. This is why you should never use your exported OGG-file to make new edits to your audio. Therefore, always use a lossless source file, if possible. However, some FLAC sources could be 'up-converted' from lossy formats, so using a spectral analyser tool to check your audio file(s) before using them is a recommended practice. For more information on audio formats [this article is recommended](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/audio-formats/index.html).

::: tip
Save your own lossless WAV(E) files when doing edits, at each step, so you always have a lossless source to continue editing from without having to redo everything from the start.
:::

The best way to check for source quality and quality loss is using [Spek](http://spek.cc/), a free acoustic spectrum analyser tool:

![Spectrum example](https://i.imgur.com/fdOZR2K.png "Spectrum example")

This tool shows the time of the song from left to right, the frequencies from lowest at the bottom to highest at the top and the loudness of the frequencies in color (legend to the right). This screenshot shows the same song with the top graph being a WAVE file and the bottom graph being an OGG file export of the same WAVE file.

How to spot low quality:
* The biggest difference between the two graphs is the frequency cut off at the top of the graph of the lossy format. This is a common technique for lossy formats to save on data as these high frequencies aren’t as important for the overall sound reproduction. This is also because the human hearing range, which spans from 20hz to 20khz at birth, can be affected by [noise-induced hearing loss](https://en.wikipedia.org/wiki/Noise-induced_hearing_loss) and/or [age](https://en.wikipedia.org/wiki/Presbycusis) which leads some people to lose hearing in frequencies above 15khz gradually with time. So it saves data by not using these freqencies, something an unaware listener wouldn't notice anyway.
* More importantly, if you look more closely at the frequencies in the audible spectrum (20hz to 20khz) you can see that the top graph looks a lot smoother with good gradients and dark blue areas (faint sounds) compared to the bottom graph which is more jagged and doesn’t include much of the finer gradients, most faint blue areas are black here instead.

These two characteristics are what you can look for this when analysing your source sound files. For more info on spectrum analysis [this article is recommended](https://opentrackers.org/whatinterviewprep.com/prepare-for-the-interview/spectral-analysis/index.html).

To use this tool simply open Spek.exe then drag and drop the audio file from file explorer into the Spek window. You can resize the window for more detail in the graph.

### Choosing Appropriate OGG Export Quality
You should aim at preserving most of the source audio data while still having the smallest file size. Keep OGG file size under 14MB (for BeatSaver) or 7MB (for Discord without Nitro).
To know what level is ideal for your song you can export your track with different qualities and [compare the spectrals](/mapping/advanced-audio.md#checking-audio-quality). However, as a general recommendation follow these settings:

* High quality source (WAVE, FLAC or MP3/AAC@+200kbps): choose an OGG quality level between 9 to 6.
* Low quality source (MP3 / AAC / OGG): choose an OGG quality level between 5 to 3.

You can’t increase audio quality by saving a lossy track with a higher bitrate (e.g. saving a YouTube-sourced track with level 10 quality), you will only bloat the file size. As explained in the previous chapter, information is lost when transcoding to any lossy format and thus can’t be restored. Transcoding one lossless format to another lossless format is fine though, e.g. FLAC to WAV(E).

## Explaning Audio Processing
To work with audio and do processing of the soundwaves there are several tools available to help achieve what we want or need. Two of these tools used are *Compressor* and *Limiter* which we used for volume processing in [Volume Modification: Making Your Song Louder](/mapping/basic-audio.md#making-your-song-louder). Below these tools are explained in more detail:

### Compressor
In essence, a Compressor reduces the dynamics above a certain threshold, ultimately making the audio signal less dynamic and lower in volume. When also boosting the signal after a compressor (Make Up Gain/Normalize) you can make the sound be perceived even louder.

The Compressor effect shipped with Audacity is actually not the best tool for music mastering because it is made for more speech oriented audio. However, it is very simple to use which is why it is used in [Volume Modification: Compression](/mapping/basic-audio.md#compression) and basic settings are provided that work for most cases. However, if you're reading this you either noticed an unpleasant distortion in the sound (the sound cuts out a bit after loud peaks) or you're curious about the settings you can adjust in a compressor, so let's take a look at those settings using the more advanced [SC4 plug-in](https://ttmanual.audacityteam.org/o/man/sc4.html) for Audacity (you may need to install the [LADSPA bundle](http://www.audacityteam.org/download/plug-ins/#ladspa) to get access to this tool).

![SC4](https://i.imgur.com/koad1gL.png)

| Effect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| - | :- |
| **RMS/peak** | Somewhat unique to this particular plug-in, you can think of it as an aggressivness slider. For our purpose we want it set to Peak, **1.0**. |
| **Attack time (ms)** | How soon the compressor starts to compress the dynamics after the threshold is exceeded, in milliseconds. To make the compressor as transparent as possible setting it to **1.5 ms** is recommended. |
| **Release time (ms)** | How soon the compressor starts to release the volume level back to normal after the level drops below the threshold, in milliseconds. To make the compressor as transparent as possible setting it to **2.0 ms** is recommended. This setting is one reason the Compressor effect shipped with Audacity isn't optimal as it only allows Release times at shortest 1 second. |
| **Threshold level (dB)** | The level at which the compressor will start to apply. This is the value to adjust if you need less or more compression. |
| **Ratio (1:n)** | The gain reduction ratio used when the signal level exceeds the threshold level. A good starting point is **1:3**. Turn this up to have an even more aggressive reduction. |
| **Knee radius (dB)** | The distance from the threshold where the knee curve starts. Setting this to **1 dB** or less should be sufficient. |
| **Makeup gain (dB)** | The amount of gain added to the processed result. Compared to the Compressor effect shipped with Audacity there is no *Make-up gain to 0dB after compressing* setting in this plug-in. However, you can easily set this to 0dB and then apply a *Normalize* effect to 0dB to the whole song and it will do the exact same processing. |
| **Enable** | A handy feature with this plug-in is the `Enable` tickbox. It will let you play back the audio with the effect window open and adjust the settings in real time. Tick and untick the `Enable` tickbox to switch between processed and unprocessed sound at any time while playing the song. This way you can compare your changes audibly right away. |

An example of how compression affects the audio, highlighted part has been compressed at 1:3 ratio with a threshold at -30db (red line).

![Compression](https://i.imgur.com/6VMXy3j.png)

::: tip
To make it easier to visually judge the dynamics of the song in dB you can set the threshold at do the following:
1. Left-click the track label and choose `Waveform (dB)`. This will show a logarithmic waveform with dB in the scale instead of a linear scale.
2. To increase the scale right click the scale on the left of the tack and click `Half Wave`.
3. To maximize track height go to `View -> Track Size -> Fit to Height` or simply press `Ctrl + Shift + F`. This will show more of the scale.

![Track](https://i.imgur.com/2zWoX9q.png)
:::

More in-depth information about compressors [can be found here](https://www.practical-music-production.com/audio-compressor/).

### Limiter
A limiter is in essence a compressor effect with an infinite gain reduction ratio, terminating any signal from going above the threshold. It means a Limiter is useful for cutting off the peaks of a waveform and making the audio be perceived even louder.

Let's take a look at Audacity's [Limiter](https://manual.audacityteam.org/man/limiter.html) effect:

![Limiter](https://i.imgur.com/6fAwHCv.png)

| Effect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
| - | :- |
| **Type** | How the effect should apply the limiting effect. For our purpose we want **Hard Limit**. |
| **Input Gain (dB) mono/Left/Right channel** | This is by how much you want to boost the audio volume by. Essentially the same as the Amplify effect. Have the same value for both left and right or you will skew the stereo image. This is the value you adjust if you need a louder or softer effect. |
| **Limit to (dB)** | At which volume the effect will limit the signal. This can be set at 0dB and will thus prevent distortion clipping, but to give lossy formats some headroom when encoding the best value to use is **-0.1dB**. |
| **Hold (ms)** | For how long the limiter effect should last for once engaged. To make the Limiter as transparent as possible setting this to **1ms** is best for our purpose. |
| **Apply Make-up Gain** | Will normalize the peaks to close to 0dB, but we've already set the proper volume with `Limit to (dB)` so this setting is unnecessary. For our purpose set this to **No**. |

More in-depth information about limiters [can be found here](https://www.practical-music-production.com/audio-limiter/).

## Song Editing using Cross-fades
When editing a shorter version of a song and a simple hard immediate cut between two similar sections of a song isn’t enough to convince your ears (usually the sections aren’t perfectly the same, usually in non-electronic music) then applying a cross-fade between the sections usually helps. Any type of restructuring editing is easier in a DAW software that uses beat grid editing, but it is possible to do the same in the free software of Audacity as well, which we will show here.

For those who don’t know, a cross-fade is when one audio track fades out while another simultaneously fades in. For best result find identical or near-identical sections on each end of the region you want to cut. Instrumental regions in electronic music better suited than regions with vocals. **Using the smallest segment possible, particularly a small section between two peaks/beats, is better to convince a listener.**

There is also a video of this process [available here](https://www.youtube.com/watch?v=oSua4ITfPy8).

**To crossfade two sections of a song do the following:**
1. Open the song in Audacity.
2. Duplicate the song track (`Select menu -> All + Edit menu -> Duplicate`, or simply press `Ctrl+A` then `Ctrl+D`.)
3. Roughly fill the unwanted end of the first track and unwanted start of the second track with silence (Select, then `Generate menu -> Silence...`).

![Cut song section](https://i.imgur.com/IRiNCz0.png "Cut song section")

4. Align the tracks by using the Time Shift Tool (![Time Shift Tool](./images/timeshift.png "Timeshift tool")) to move the second track to a place roughly in place so the similar sections are close to each other. Then zoom in and adjust again, then repeat till the waveform changes to dots when you zoom. Align the dots on the bottom track with the similar peaks and lows with the top track, if possible.

::: tip
Utilize a Click Track to make sure the tracks are in time with each other.  
See [Audio Preparation: Adding Click Track](https://bsmg.wiki/mapping/basic-audio#add-a-click-track).
:::

![Zoomed syncing](https://i.imgur.com/9jyrzzv.png "Zoomed syncing")

5. The last section of the top track should now be identical or similar to the first section of the bottom track but from different times in the song. Listen to the overlapping area to confirm a match, making sure there is no echo/offset from misaligned tracks.

::: tip
To avoid overdrive/clipping from two -0db peaking tracks you can set the faders for both tracks to -6db ![Fader](https://i.imgur.com/kvsHvMT.png) then later back to +0db after the crossfade has been applied. Double click the fader to type in the number.
:::

7. Select the overlapping region across both tracks.
8. Go to `Effect menu -> Crossfade Tracks`. Set Fade direction to `Alternating Out / In`. Click OK to apply crossfade.

![Crossfade](https://i.imgur.com/amqrj1I.png "Crossfade")

9. Listen to the overlapping sections again. If all went well, you should now have a perfectly blended transition between the two tracks.
10. Combine the tracks by selecting all (`Select menu -> All` or `Ctrl+A`) then going to `Tracks menu -> Mix` then `Mix and Render`.
11. Done. You could now proceed with other [Audio Editing](/mapping/basic-audio.md#editing-with-audacity) or finish with [Exporting](/mapping/basic-audio.md#exporting).

## Variable BPM
If the song you’re trying to map has a tempo that doesn’t sync up with a fixed BPM (as in, even with BPM values with decimals), such as (older) acoustic pop, rock or metal songs, they were most likely not recorded to a metronome and will thus not easily sync up to a fixed BPM in Audacity or the map editor. No matter what the solution is it always involves brute forcing it by manually adjusting the BPM (tempo track) at intervals, sometimes every beat, to fit the song. This takes a lot of time and patience, so make sure it's worth the extra effort.

The benefit of having a synced BPM/tempo track is easier and consistent note placement and editing, as well as easier and consistent lighting editing, especially with more than one difficulty in a map.

There are several methods to go about handling variable BPM:
* Manually time the BPM changes in MedicoreMapper. [Video tutorial by BennyDaBeast here](https://www.youtube.com/watch?v=6AwR4SeaiHU).
* Use a DAW software and find all the tempo changes using a tempo track editor. Use Jumps instead of Ramps as that’s how MediocreMapper changes tempo. When you’ve found all the tempo changes input those into MediocreMapper. (Remember, DAW softwares usually display measures and beats, but MediocreMapper only displays beats.)
* Use a DAW software and time warp the sound into a fixed BPM. This, however, could introduce artifacts or warp the sound and could be more easily noticeable by listeners/players.
