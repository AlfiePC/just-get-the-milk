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
