import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}

/* These three skills dont follow a linear patch for some increases. Data came from official builder.
https://borderlands.com/en-US/characters/fl4k/#-
Might be different in game but I haven't played FL4K yet!
There are probably diminishing return algorithms for these but this was quicker than figuring that out. */

// Hunter's Eye Damage Resistance
function getHuntersEyeDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 5.3;
    case 2:
      return 10.1;
    case 3:
      return 14.4;
    case 4:
      return 18.3;
    case 5:
      return 21.9;
    default:
      return 0;
  }
}

// Ambush Predator Handling
function getAmbushPredatorHandling(rank) {
  switch (rank) {
    case 1:
      return 17;
    case 2:
      return 29;
    case 3:
      return 38;
    case 4:
      return 44;
    case 5:
      return 50;
    default:
      return 0;
  }
}

// The Most Dangerous Game Handling
function getMostDangerousGameHandling(rank) {
  switch (rank) {
    case 1:
      return 14.3;
    case 2:
      return 25.0;
    case 3:
      return 33.3;
    default:
      return 0;
  }
}

// Furious Attack Handling
function getFuriousAttackHandling(rank) {
  switch (rank) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 2.9;
    case 4:
      return 3.8;
    case 5:
      return 4.8;
    default:
      return 0;
  }
}

// Turn Tail And Run Damage Resistance
function getTurnTailAndRunDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 6.5;
    case 2:
      return 12.3;
    case 3:
      return 17.4;
    default:
      return 0;
  }
}

// Interplanetary Stalker Beast Movement Speed
function getInterplanetaryStalkerBeastMovementSpeed(rank) {
  switch (rank) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 5;
    case 4:
      return 6;
    case 5:
      return 7;
    default:
      return 0;
  }
}

// Second Intention Critical Kill Reload Speed
function getSecondIntentionCriticalKillReloadSpeed(rank) {
  switch (rank) {
    case 1:
      return 6;
    case 2:
      return 11;
    case 3:
      return 15;
    case 4:
      return 19;
    case 5:
      return 23;
    default:
      return 0;
  }
}

/* eslint-disable quotes */
const skills = {
  "Stalker": {
    "0": {
      "Jabber Sidekick": {
        text: "FL4K is joined by a loyal Jabber companion, armed with a Pistol. While accompanied by the Jabber, FL4K's Movement Speed is increased. Hold [Pet Skill key] to issue an Attack Command, which will cause the Jabber to throw a Radiation Barrel at enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed: +5%`,
      },
      "Fade Away": {
        text: "FL4K cloaks, turning invisible. FL4K can fire 3 shots while cloaked, and each shot is automatically a Critical Hit. While cloaked, FL4K has increased Movement Speed and Health Regeneration.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Fade Away Bonus Damage: 200% of damage dealt\nCloaked Movement Speed: +25%\nHealth Regeneration: +3% of Max Health per second\nDuration: 15 seconds\nCooldown: 45 seconds`,
      },
    },
    "1": {
      "Self-Repairing System": {
        text: "FL4K's Maximum Health is increased, and they constantly regenerate health.",
        ranks: 5,
        effect: (rank, level) => `Maximum Health: +${percent(rank, 6)}%\nHealth Regeneration: +${percent(rank, 0.3)}% of Max Health/sec`,
      },
      "Sic'Em": {
        text: "Attack Command has lowered Cooldown and increased Damage.",
        ranks: 3,
        effect: (rank, level) => `Attack Command Damage: +${percent(rank, 10)}%\nAttack Command Cooldown: -${percent(rank, 10)}%`,
      },
      "Furious Attack": {
        text: "Hunter Skill. After shooting an enemy, FL4K gains a stack of Furious Attack. For each stack of Furious Attack, FL4K's Handling and Gun Damage are increased, and their pet gains increased Damage per stack. Stacks decay after a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 0.4)}% per stack\nHandling: +${getFuriousAttackHandling(rank)}% per stack\nPet Damage: +${percent(rank, 0.6)}% per stack\nMaximum Stacks: 10\nDuration: 4 seconds`,
      },
    },
    "2": {
      "Guerrillas In The Mist": {
        text: "Fade Away no longer ends after FL4K attacks, at the cost of Critical Hit Damage and Fade Away duration being reduced.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Fade Away Bonus Damage: 25% of damage dealt\nFade Away Duration: 5 seconds`,
      },
      "Eager To Impress": {
        text: "Kill Skill. Whenever FL4K kills an enemy, Action Skill Cooldown Time is reduced. Whenever FL4K's pet kills an enemy, Action Skill Cooldown Time is reduced even more and Attack Command's duration is refreshed.",
        ranks: 5,
        effect: (rank, level) => `FL4K Kill Action Skill Cooldown: -${percent(rank, 0.25)} seconds\nPet Kill Action Skill Cooldown: -${percent(rank, 0.5)} seconds`,
      },
      "All My BFF's": {
        text: "Allies share a portion of FL4K's total Health Regeneration. FL4K's pet shares twice the amount of Health Regeneration.",
        ranks: 3,
        effect: (rank, level) => `Allies' Health Regen: +${Math.round(percent(rank, 16.666))}% of FL4K's Health Regen\nPet Health Regen: +${Math.round(percent(rank, 33.333))}% of FL4K's Health Regen`,
      },
      "Overclocked": {
        text: "FL4K gains increased Fire Rate. FL4K gains even more Fire Rate after reloading.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate: +${percent(rank, 2)}%\nAdditional Fire Rate: +${percent(rank, 2)}%\nDuration: 4 seconds`,
      },
    },
    "3": {
      "Not My Circus": {
        text: "After Fade Away ends, FL4K's pet will Taunt, drawing the attention of all enemies in a huge radius. For a few seconds after Taunting, the pet gains powerful Damage Resistance.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Pet Taunt Duration: 6 seconds\nPet Damage Resistance: +80%`,
      },
      "Lick The Wounds": {
        text: "When FL4K is in Fight For Your Life, their pet will attempt to revive them. If it does, it gains increased Damage for a short time.",
        ranks: 1,
        effect: (rank, level) => `Pet Damage: +30%\nDuration: 60 seconds`,
      },
      "Turn Tail And Run": {
        text: "While moving, FL4K constantly regenerates health and gains Damage Resistance.\nWhile still, FL4K gains Gun Damage and Fire Rate.",
        ranks: 3,
        effect: (rank, level) => `Damage Resistance: +${getTurnTailAndRunDamageResistance(rank)}% while moving\nHealth Regen: +${percent(rank, 0.3)}% of Max Health/sec while moving\nGun Damage: +${percent(rank, 8.333)}% while still\nFire Rate: +${percent(rank, 4)}% while still`,
      },
      "Beefcake Jabber": {
        text: "FL4K's Jabber evolves into a Beefcake, discarding its pistol and equipping a Shotgun. While accompanied by the Beefcake, FL4K gains increased Movement Speed and Maximum Health. When FL4K issues an Attack Command, the Beefcake will summon a melee weapon to deliver a powerful attack that knocks enemies back.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed: +5%\nMaximum Health: +10%`,
      },
    },
    "4": {
      "Until You Are Dead": {
        text: "The Health Regeneration and Movement Speed of Fade Away persists for a short time after the skill has ended.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Duration: 10 seconds after Fade Away ends`,
      },
      "The Fast And The Furryous": {
        text: "While above half health, FL4K's Gun Damage and Movement Speed are increased, and their pet gains increased Damage.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: +${Math.round(percent(rank, 8.333))}%\nMovement Speed: +${percent(rank, 3.333)}%\nPet Damage: +${percent(rank, 10)}%`,
      },
      "Hidden Machine": {
        text: "When an enemy has no target or is attacking a different target, FL4K deals increased damage against them.",
        ranks: 5,
        effect: (rank, level) => `Damage: +${percent(rank, 6)}%`,
      },
      "Gunslinger Jabber": {
        text: "FL4K's Jabber upgrades his gear and equips an SMG. While accompanied by the Gunslinger, FL4K gains increased Movement Speed and Critical Hit Damage. When FL4K issues an Attack Command, the Gunslinger equips a Rocket Launcher to attack the target.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed: +5%\nCritical Hit Damage: +5%`,
      },
    },
    "5": {
      "Unblinking Eye": {
        text: "During Fade Away, successive hits on the same target increase FL4K's Critical Damage per hit. Unblinking Eye resets every 3 hits.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Additional Fade Away Bonus Damage: +75% of damage dealt per hit`,
      },
      "Rage And Recover": {
        text: "Kill Skill. After killing an enemy, FL4K and FL4K's pet regenerate health for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Health Regeneration: +${percent(rank, 1.6)}% of Missing Health/sec\nPet Health Regen: +${percent(rank, 1.6)}% of Missing Health/sec\nDuration: 3 seconds`,
      },
    },
    "6": {
      "The Power Inside": {
        text: "FL4K and FL4K's pet gain increased Damage when FL4K activates an Action Skill. If FL4K is at full health, the increased Damage is doubled.",
        ranks: 1,
        effect: (rank, level) => `Damage: +25%\nPet Damage: +25%\nDuration: 15 seconds`,
      },
    },
  },
  "Master": {
    "0": {
      "Guard Skag": {
        text: "FL4K is joined by a loyal Skag companion, which will increase FL4K's Damage. Hold [Pet Skill key] to issue an Attack Command, which will cause the Skag to vomit acid onto enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage: +5%`,
      },
      "Gamma Burst": {
        text: "FL4K creates a Rift at a target location, teleporting their pet through the Rift and dealing Radiation Damage to nearby enemies. Additionally, FL4K's pet becomes irradiated, growing in size and dealing bonus Radiation Damage when it attacks. Using Gamma Burst while FL4K's pet is downed or dead will revive the pet at the targeted location with 30% of its health, but will double Action Skill Cooldown Time.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Damage 56: (increases with character level)\nDuration: 20 seconds\nCooldown: 30 seconds`,
      },
    },
    "1": {
      "Ferocity": {
        text: "FL4K's Pet deals increased damage.",
        ranks: 5,
        effect: (rank, level) => `Pet Damage: +${percent(rank, 10)}%`,
      },
      "Persistence Hunter": {
        text: "Increases FL4K's Gun Damage and Action Skill Duration.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)}%\nAction Skill Duration: +${percent(rank, 15)}%`,
      },
      "Go For The Eyes!": {
        text: "When FL4K's pet attacks an enemy, the first melee attack is an automatic Critical Hit that deals increased damage.",
        ranks: 5,
        effect: (rank, level) => `Pet Critical Hit Damage: ${percent(rank, 15)}%`,
      },
    },
    "2": {
      "Atomic Aroma": {
        text: "While Gamma Burst is active, FL4K's pet is surrounded by a Radiation Aura, constantly damaging all nearby enemies.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Radiation Damage: 4 per second (increases with character level)`,
      },
      "Who Rescued Who?": {
        text: "Whenever FL4K's Pet deals damage, FL4K regenerates health for a few seconds. Whenever FL4K deals damage to an enemy, their Pet's health is restored for a portion of the damage dealt.",
        ranks: 5,
        effect: (rank, level) => `Health Regeneration: +${percent(rank, 0.4)}% of Max Health/sec\nPet Health Restored: +${percent(rank, 1)}% of damage dealt`,
      },
      "He Bites!": {
        text: "When FL4K's pet takes damage, the pet returns some of that damage to the attacker.",
        ranks: 3,
        effect: (rank, level) => `Damage Returned: ${percent(rank, 5)}% of damage received`,
      },
      "Frenzy": {
        text: "Hunter Skill. When FL4K's pet deals damage, FL4K and their pet gain a stack of Frenzy. Each stack of Frenzy increases Damage. The stacks decay after a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Damage: +${percent(rank, 0.8)}% per stack\nPet Damage: +${percent(rank, 0.8)}% per stack\nMaximum Stacks: 10`,
      },
    },
    "3": {
      "Empathic Rage": {
        text: "For the duration of Gamma Burst, Damage dealt by FL4K is increased.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Damage: +20%`,
      },
      "Psycho Head On A Stick": {
        text: "Hunter Kill Skill. Whenever FL4K kills an enemy, their pet gains increased Movement Speed and Damage for a few seconds.",
        ranks: 1,
        effect: (rank, level) => `Pet Damage: +20%\nPet Movement Speed: +12%\nDuration: 8 seconds`,
      },
      "Hive Mind": {
        text: "When FL4K takes damage, a portion of all damage they take is inflicted on their pet instead.",
        ranks: 3,
        effect: (rank, level) => `Damage Shared: ${percent(rank, 5)}%`,
      },
      "Great Horned Skag": {
        text: "FL4K's Skag evolves into a larger Great Horned Skag, which will increase FL4K's Damage and Gun Damage. When FL4K issues an Attack Command, the Great Horned Skag will charge at enemies and knock them into the air.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage: +5%\nGun Damage: +10%`,
      },
    },
    "4": {
      "Endurance": {
        text: "When FL4K or FL4K's pet kills an enemy while Gamma Burst is active, the duration of Gamma Burst is extended and pet damage is increased. These effects can stack up to 5 times.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Gamma Burst Duration: +3 seconds per kill\nPet Damage: +10% per kill\nMaximum Stacks: 5`,
      },
      "Barbaric Yawp": {
        text: "Increases the power of Pet Bonuses granted to FL4K.",
        ranks: 5,
        effect: (rank, level) => `Pet Bonuses: +${percent(rank, 40)}%`,
      },
      "Mutated Defenses": {
        text: "When FL4K's pet is at low health, it gains Damage Resistance and regenerates health. This skill has a long cooldown.",
        ranks: 1,
        effect: (rank, level) => `Pet Damage Resistance: +30%\nPet Health Regen: +6.667% of Max Health/sec\n Duration: 6 seconds\nCooldown: 15 seconds`,
      },
      "Eridian Skag": {
        text: "FL4K's Skag evolves into an Eridian Skag, which will increase FL4K's Damage and Fire Rate. When FL4K issues an Attack Command, their Eridian Skag pulls nearby enemies in by generating a Singularity.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage: +5%\nFire Rate: +5%`,
      },
    },
    "5": {
      "Burst Aid": {
        text: "After using Gamma Burst, the Rift remains for the duration of the skill. While standing near the Rift, FL4K and their allies rapidly Regenerate Health.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Team Health Regeneration: +20% of Max Health/sec`,
      },
      "Pack Tactics": {
        text: "All damage dealt by FL4K and their pet is increased. Additionally, the Maximum Health of both FL4K and their pet is increased.",
        ranks: 3,
        effect: (rank, level) => `Damage: +${percent(rank, 7)}%\nMaximum Health: +${percent(rank, 5)}%\nPet Damage: +${percent(rank, 7)}%\nPet Maximum Health: +${percent(rank, 5)}%`,
      },
      "Shared Spirit": {
        text: "While FL4K is at low health, a portion of all damage they take is inflicted on their pet instead.",
        ranks: 1,
        effect: (rank, level) => `Damage Shared: 50%`,
      },
    },
    "6": {
      "Dominance": {
        text: "Melee Override Skill. FL4K establishes dominance over an enemy, turning it into an ally for a short time. If the enemy is a Beast, the duration is doubled. While under the effects of Dominance, the enemy constantly loses health until it dies or the effect ends. Only one enemy can be dominated at a time. An enemy can only be dominated once.",
        ranks: 1,
        effect: (rank, level) => `Duration: 12 seconds\nTarget Loses 2% of Maximum Health per second`,
      },
    },
  },
  "Hunter": {
    "0": {
      "Spiderant Centurion": {
        text: "FL4K is joined by a loyal Spiderant companion, which will cause FL4K to constant regenerate health. Hold [Pet Skill key] to issue an Attack Command, which will cause the Spiderant to charge into enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration: 1% of Max Health per second`,
      },
      "Rakk Attack!": {
        text: "FL4K sends forward 2 Rakk to dive-bomb enemies. This skill has multiple charges. Element: Incendiary.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Damage: 35 (increases with character level)\nElement Status Effect Chance: 100%\nCooldown: 18 seconds`,
      },
    },
    "1": {
      "Interplanetary Stalker": {
        text: "Hunter Kill Skill. Whenever FL4K kills an enemy, they gain a stack of Interplanetary Stalker. For each stack of Interplanetary Stalker, they and their pet gain a bonus to all damage dealt. Additionally, they gain a unique stacking bonus depending on the type of enemy killed. Each unique bonus can stack up to 3 times. Each stack decays after a short time.",
        ranks: 5,
        effect: (rank, level) => `Damage: +${percent(rank, 2)}% per stack\nPet Damage: +${percent(rank, 1)}% per stack\nHuman Bonus: +${percent(rank, 3)}% Action Skill Damage per stack\nRobot Bonus: +${percent(rank, 1.5)}% Corrosive Damage per stack\nBeast Bonus: +${getInterplanetaryStalkerBeastMovementSpeed(rank)}% Movement Speed per stack\nMaximum Stacks: 3`,
      },
      "Leave No Trace": {
        text: "When FL4K scores a Critical Hit, there is a chance for 1 ammo to be added to their magazine.",
        ranks: 3,
        effect: (rank, level) => `Ammo Chance: +${percent(rank, 12)}%\nCooldown: 0.3 seconds`,
      },
      "Second Intention": {
        text: "Hunter Kill Skill. Whenever FL4K kills an enemy, they gain increased Reload Speed. This bonus is increased if FL4K scores a Critical Kill.",
        ranks: 5,
        effect: (rank, level) => `Reload Speed: +${Math.ceil(percent(rank, 2.6))}%\nCritical Kill Reload Speed: +${getSecondIntentionCriticalKillReloadSpeed(rank)}%\nDuration: 5 seconds`,
      },
    },
    "2": {
      "Rakk Open A Cold One": {
        text: "Converts FL4K's Rakk to Cryo Damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Rakk Attack! Element: Cryo`,
      },
      "Hunter's Eye": {
        text: "FL4K gains bonuses when fighting different types of enemies.",
        ranks: 5,
        effect: (rank, level) => `Human Bonus: +${percent(rank, 2.48)}% Critical Hit Damage\nRobot Bonus: +${percent(rank, 6)}% Armor Damage\nBeast Bonus: +${getHuntersEyeDamageResistance(rank)}% Damage Resistance`,
      },
      "Head Count": {
        text: "Whenever FL4K scores a Critical Hit, there is a chance their Action Skill Cooldown is reduced.",
        ranks: 3,
        effect: (rank, level) => `Cooldown Reduction Chance: +${percent(rank, 10)}%\nAction Skill Cooldown: -2 seconds`,
      },
      "Ambush Predator": {
        text: "While there are no enemies nearby, FL4K's Weapon Handling and Critical Hit Damage are increased.",
        ranks: 5,
        effect: (rank, level) => `Critical Hit Damage: +${percent(rank, 4)}%\nHandling: +${getAmbushPredatorHandling(rank)}%`,
      },
    },
    "3": {
      "Falconer's Feast": {
        text: "When FL4K's Rakk damage an enemy, a portion of FL4K's health is restored.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Health Restored: 7% of Maximum Health`,
      },
      "Two F4ng": {
        text: "FL4K has a chance to fire an extra projectile per shot.",
        ranks: 5,
        effect: (rank, level) => `Extra Projectile Chance: +${percent(rank, 5)}%`,
      },
      "Spiderant Scorcher": {
        text: "FL4K's Spiderant evolves into a Scorcher, occasionally dealing Incendiary Damage to all enemies nearby. While accompanied by the Scorcher, FL4K constantly regenerates health and deals increased Elemental Damage. When FL4K issues an Attack Command, the Scorcher will charge enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration: +1% of Max Health per second\nElemental Damage: +10%`,
      },
    },
    "4": {
      "Flock'N'Load": {
        text: "FL4K sends forward additional Rakk.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Additional Rakk: +2`,
      },
      "Big Game": {
        text: "FL4K's Hunter Skills become much more effective and have a longer duration.",
        ranks: 3,
        effect: (rank, level) => `Hunter Skill Effects: +${percent(rank, 10)}%\nHunter Skill Duration: +${Math.round(percent(rank, 33.333))}%`,
      },
      "The Most Dangerous Game": {
        text: "Hunter Kill Skill. Whenever FL4K kills a Badass or stronger enemy, they gain increased Critical Hit Damage, Gun Damage, and Handling for a long time and their pet receives increased Damage for a long time. Additionally, they receive a cash reward from the Intergalactic Bureau of Bounty Hunting.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3.333)}%\nCritical Hit Damage: +${Math.round(percent(rank, 8.333))}%\nHandling: +${getMostDangerousGameHandling(rank)}%\nPet Damage: +${percent(rank, 9)}%\nDuration: 120 seconds`,
      },
      "Spiderant Countess": {
        text: "FL4K's Spiderant evolves into a Countess, which will cause FL4K to constantly regenerate health and gain Damage Resistance. When FL4K issues an Attack Command, the Countess will burrow underground and then emerge dealing Corrosive Damage in an area.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration: +1% of Max Health per second\nDamage Resistance: +5%`,
      },
    },
    "5": {
      "Rakkcelerate": {
        text: "FL4K's Rakk have increased Cooldown Rate and gain an Additional Charge.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Rakk Attack! Cooldown Rate: +20%\nMaximum Rakk Attack! Charges: +1`,
      },
      "Galactic Shadow": {
        text: "FL4K deals increased Critical Hit Damage, and enemies are less likely to attack them.",
        ranks: 1,
        effect: (rank, level) => `Critical Hit Damage: +15%`,
      },
      "Grim Harvest": {
        text: "FL4K gains increased Gun Damage and Action Skill Damage. FL4K's pet gains increased Damage.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}%\nAction Skill Damage: +${percent(rank, 5)}%\nPet Damage: +${percent(rank, 7)}%`,
      },
    },
    "6": {
      "Megavore": {
        text: "FL4K gains a chance to score a Critical Hit with weapons against any part of enemies.",
        ranks: 1,
        effect: (rank, level) => `Critical Hit Chance: +20%`,
      },
    },
  },
};

export default skills;
