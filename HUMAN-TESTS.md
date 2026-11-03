# What only a real person or the headset can still confirm

Everything below was NOT verifiable from Claude's test environment. Automated checks that did pass are listed in `loop/LOG.md` in the source folder.

## Needs a real non-gamer (5 minutes, say nothing, watch)
1. Do they press T (or tap Walk) on their own from the instruction bar, without being told?
2. Do they understand the challenge panel and tap Space fast without help?
3. When they lose the unwinnable challenge, do they feel it was unfair in the way intended, or just confused?
4. After the end screen, can they say in their own words what the game was about?
5. Is the sound bearable at the default volume? (No automated test can judge loudness or discomfort.)
6. Does anyone find the experience too distressing? Watch for it and stop if so.

## Needs the Meta Quest 3S headset
### Checklist for the next headset session (only the real headset can confirm these)
Open alfiepc.github.io/just-get-the-milk/p (VR with the frame-rate readout). Tick each one:
1. **Both triggers pick up every item.** Bread, bananas and milk in one run, using the left trigger for at least one and the right for at least one. (Fixed after session 3; emulator passes all three in a row.)
2. **Taps feel responsive.** In a challenge, does each press of A, X or a trigger give a click in the hand and move the bar straight away?
3. **Rumble is strong enough.** Stronger as a challenge bar rises, full strength in a crisis.
4. **Hold Y to exit.** Holding Y on the left controller for about 1.5 s leaves VR and returns to the start screen; a short press does nothing.
5. **Walking while turning never stops you.**
6. **Nothing overlaps.** Top waypoint, centre challenge/crisis panel and the "Pull a trigger" label on your hand.
7. **The crisis still feels like a crisis** (session 3 said yes) and the sound is uncomfortable but not painful.
8. **Frame rate** stays green at 72 on the top panel.

**Quick performance check (2 minutes):** open https://alfiepc.github.io/just-get-the-milk/vr.html?perf=1 in the Quest browser, press Start, and look at the bottom of the wrist panel (raise your left hand). It shows frames per second, the quality level and draw calls.
- **Green 72 fps, quality 3/3** = running as designed.
- **Quality 2/3 or lower** = the game hit slow frames and switched off some shoppers or effects automatically. Note when it happened.
- **Amber or red fps that stays there** = still too slow; tell Claude the number and what was on screen.

**Headset fixes from Alfie's first real session (3 Nov):** performance was fine. Fixed: the "Find…" panel now sits small in the lower-left corner instead of dead centre; the right stick turns smoothly (about 90° a second) instead of snapping; pick-up now works by pointing: each controller has a laser that turns lime on a goal item, and pulling the trigger picks it up (it also still works by looking at the item when close); sounds are harsher and carry further in VR (alarm and crisis tones unchanged, everything under the limiter). Please check on the headset:
- Is the corner panel readable, and out of the way?
- Is smooth turning comfortable, or too fast or slow?
- Does point-and-pull pick up every item first time?
- Is the shop now uncomfortable enough, without being painful?

**Second headset session (3 Nov):** turning speed confirmed fine. Fixed: the corner panel overlapped the left-hand menu, so the left-hand menu is gone and a small waypoint panel now sits at the TOP of the view (next item, arrow, distance, time left, crises); a big centre panel appears only for challenges, warnings and crises (it was never updating in VR before, which is why the crisis message and tap prompts had vanished); when you are at an item, "Pull a trigger" floats above it and the top panel says the same; either trigger picks up (pointing with either controller, looking at it, or standing within 2 m); controllers now rumble with the challenge bar and hard during a crisis. Please check: does the crisis now feel like one, and do the prompts appear?

**Third headset session (3 Nov):** crisis now feels like a crisis. Fixed: waypoint and "Pull a trigger" overlapped (the label now sits on your hand, and the top waypoint hides while the centre panel is up); centre panel smaller and lower; every tap gives a controller click and redraws the panel on the next frame; stronger rumble (crisis full strength); the right stick only turns (its up/down was cancelling your forward walk); trigger pick-up hardened (every button action guarded, the headset's own select event restored as a backup, nearest item within 3.5 m counts) and tested for all three items in a row; hold Y on the left controller for 1.5 s to exit VR (back to the start screen). Please check: does the trigger pick up every item now, and is the tap response and rumble right?

What was optimised for the Quest 3S on 3 Nov, measured in the emulator: draw calls 212 → 142 per frame, render CPU 10.3 → 6.1 ms on the laptop, the 564 ms first-frame stall removed by compiling every shader at load, physically based materials swapped for cheaper Lambert ones, all 36 product types welded into one mesh with one texture, parked and pushed trolleys welded, one cosmetic light removed, the effect overlay skipped when no effect is showing, and the headset asked for 72 Hz.

1. Does pressing Start drop you straight into VR on the first press?
2. Is it smooth (no judder) while walking? The emulator could only measure draw calls, not real frame rate.
3. Comfort: any motion sickness from smooth walking or snap turning?
4. Are the floating panel and wrist panel readable and in a comfortable place?
5. Are the button labels right in practice (B/Y walk, trigger pick up, A/X cope)?

## Needs a real phone
1. Is the big Cope button easy to hit fast with a thumb?
2. Does the touch joystick and drag-to-look feel usable?

## Found by twelve cold AI playtests, needs a human to judge
These came from a fresh AI agent playing with no context, one round at a time; each round's top confusion was fixed and confirmed by the next tester. What is left can only be judged by a person.
1. **Pace on your hardware.** In the test browser the game ran at 1/8 to 1/10 speed. On a normal laptop, does it feel smooth, and do the 8 to 10 second challenges feel fair at real speed?
2. **Tapping feel.** The bar now has a white "you are here" edge and one steady line: "Start tapping SPACE", "Under control", "Going down" or "Rising: tap faster". Does that match what people feel while tapping? Does losing the unwinnable one (it now takes 3 to 6 seconds) feel like the point being made, not like their fault?
3. **The scrambled shopping list and garbled tannoy text** are deliberate (delayed processing, speech you can't decode). Testers thought something had broken until the end screen explained it. Do people get it, or does it need a hint?
4. **Camera at pick-up.** Several testers were told "Press Enter to pick up" while the item was off camera, because the auto-walk arrives facing down the aisle. Watch whether real players notice.
5. **A challenge that opens mid-walk** can be missed if you are just watching. With sound on, the challenge sound may be enough; check with sound.
6. **End screen length.** Every tester said the message was clear ("The task was never the hard part") but that about 17 cards sit before it. Watch whether people scroll that far.
7. **"Three crises end the trip"** is on the start screen and the count shows after the first crisis. Check people understand "crisis" before they have seen one.
8. **Smaller points testers raised:** the shop map has no legend; the timer is not explained; "Can I help?" says "until you answered" but there is nothing to answer; a smell challenge can appear when the profile says smells barely register.
