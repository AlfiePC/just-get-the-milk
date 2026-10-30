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
1. Does pressing Start drop you straight into VR on the first press?
2. Is it smooth (no judder) while walking? The emulator could only measure draw calls, not real frame rate.
3. Comfort: any motion sickness from smooth walking or snap turning?
4. Are the floating panel and wrist panel readable and in a comfortable place?
5. Are the button labels right in practice (B/Y walk, trigger pick up, A/X cope)?

## Needs a real phone
1. Is the big Cope button easy to hit fast with a thumb?
2. Does the touch joystick and drag-to-look feel usable?

## Found by six cold AI playtests, needs a human to judge
These came from a fresh AI agent playing with no context. Each round was fixed; what is left can only be judged by a person.
1. **Pace on your hardware.** In the test browser the game ran at 1/10 speed. On a normal laptop, does it feel smooth, and do the 8–10 second challenges feel fair at real speed?
2. **Tapping feel.** Taps now count on slow machines and every tap shows "Pushing it back". Does steady tapping feel like it is working? Does losing the one unwinnable challenge feel like the point being made, not like your fault?
3. **The scrambled shopping list and garbled tannoy text** are deliberate (delayed processing, speech you can't decode). The AI testers thought something had broken until the end screen explained it. Do people get it, or does it need a hint?
4. **"Walk up to the bouncing item"** on the start screen next to "Press T and you are walked there" read as a contradiction to two testers. Watch whether people hesitate there.
