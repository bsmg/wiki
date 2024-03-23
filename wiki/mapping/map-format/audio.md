---
---

# Audio

The audio file stores all information regarding how your audio file should be processed.

:::: details Sample Data
::: code-group
<<< @/.assets/snippets/audio/2.0.0.dat{json} [2.0.0]
<<< @/.assets/snippets/audio/4.0.0.dat{json} [4.0.0]
:::
::::

## Summary

::: tabs

== 2.0.0
Introduced in **1.22.2**

- The official editor will parse any defined BPM regions
  and generate the corresponding [BPM events](./lightshow.md#bpm-events) in all related beatmaps.

== 4.0.0
Introduced in **1.34.5**

- BPM regions are now solely responsible for handling BPM changes.
- Added support for [LUFS control](#lufs-data), or normalization of perceived loudness, for audio files.

:::

## Sample Count

A value which measures the duration of the audio file in samples.

::: code-group

```jsonc [2.0.0]
{
  "_songSampleCount": 1149241, // Sample Count
}
```

```jsonc [4.0.0]
{
  "songSampleCount": 1149241, // Sample Count
}
```

:::

## BPM Regions

Alters the BPM of the specified region.

::: code-group

```jsonc [2.0.0]
{
  "_regions": [
    {
      "_startSampleIndex": 0, // Start Sample Index
      "_endSampleIndex": 1149214, // End Sample Index
      "_startBeat": 0, // Start Beat
      "_endBeat": 26, // End Beat
    },
  ],
}
```

```jsonc [4.0.0]
{
  "bpmData": [
    {
      "si": 0, // Start Sample Index
      "ei": 1149214, // End Sample Index
      "sb": 0, // Start Beat
      "eb": 26, // End Beat
    },
  ],
}
```

:::

### Sample Index {#bpm-regions-sample-index}

Two values which calculate the bounds (starting/ending point) of the region.

### Start/End Beat {#bpm-regions-beat}

Two specific points in time, as determined by the [BPM](info.md#bpm) of the song,
which in turn help to determine how many beats make up the indicated region.

## Song Frequency

A value which caches the quality level of the audio file.
Primarily used by the Official Editor when producing the spectrogram.

::: code-group

```jsonc [2.0.0]
{
  "_songFrequency": 44100,
}
```

```jsonc [4.0.0]
{
  "songFrequency": 44100,
}
```

:::

## LUFS Data

Applies a normalization to the loudness of the audio file within the specified region.

::: code-group

```jsonc [4.0.0]
{
  "lufsData": [
    {
      "si": 0, // Start Sample Index
      "ei": 1149214, // End Sample Index
      "l": -2.5, // Loudness
    },
  ],
}
```

:::

### Sample Index {#lufs-data-sample-index}

Two values which calculate the bounds (starting/ending point) of the region.

### Loudness {#lufs-data-loudness}

A value which adjusts the loudness for the indicated region.
