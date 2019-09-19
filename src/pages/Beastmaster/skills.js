import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}

/* These three skills dont follow a linear patch for some increases. Data came from official builder.
https://borderlands.com/en-US/characters/fl4k/#-
Might be different in game but I haven't played FL4K yet!
There are probably diminishing return algorithms for these but this was quicker than figuring that out. */

// Hunter's Eye Damage Reduction
function getHuntersEyeDamageReduction(rank) {
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
function getMostDangerousGameHandling (rank) {
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

/* eslint-disable quotes */
const skills = {
  "Stalker": {
    "0": {
      "Jabber Sidekick": {
        text: "FL4K gains a Jabber companion, who shoots enemies with a pistol. FL4K gains increased movement speed. Jabber throws a radiation barrel after FL4K uses the attack command.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed +5%`,
      },
      "Fade Away": {
        text: "FL4K turns invisible, gains increased movement speed, health generation, and can fire three guaranteed critical shots before uncloaking.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Critical Hit Damage +200%,
          Cloaked Movement Speed +25%,
          Max Health Regeneration +3% of Max Health/second,
          Cooldown 45 seconds,
          Skill Duration 15 seconds`,
      },
    },
    "1": {
      "Self-Repairing System": {
        text: "FL4K has increased health and constantly regenerates health.",
        ranks: 5,
        effect: (rank, level) => `Max Health +${percent(rank, 6)}%,
          Health Regen ${percent(rank, 0.3)}%`,
      },
      "Sic'Em": {
        text: "FL4K's attack command's cooldown is shorter and deals increased damage",
        ranks: 3,
        effect: (rank, level) => `Attack Command Damage +${percent(rank, 10)}%,
          Attack Command Cooldown -${percent(rank, 10)}%`,
      },
      "Furious Attack": {
        text: "Shooting enemies grants stacks of Furious Attack. Each stack increases handling and gun damage. Stacks decay over time.",
        ranks: 5,
        effect: (rank, level) => `Handling +${percent(rank, 1)}% per stack, 
          Gun Damage +${percent(rank, 0.4)}% per stack, 
          Stacks: 10, Ability Duration: 4 seconds`,
      },
    },
    "2": {
      "Guerrillas In The Mist": {
        text: "Fade Away's stealth no longer dissipates after three attacks, but lowers critical damage and has a shorter duration.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Fade Away Duration 8 seconds, 
          Critical Hit Damage 50%`,
      },
      "Eager To Impress": {
        text: "FL4K reduces their skill cooldown with each kill. Pet kills further reduce the action skill cooldown, and refresh Attack Command's cooldown.",
        ranks: 5,
        effect: (rank, level) => `Pet Kill Cool Down Time -${percent(rank, 0.5)}%,
          FL4K Kill Cool Down Time -${percent(rank, 0.25)}%`,
      },
      "All My BFF's": {
        text: "Allies share in FL4K's health regeneration. FL4K's pet gains double health regeneration.",
        ranks: 3,
        effect: (rank, level) => `Allies Share of Health Regeneration ${Math.round(percent(rank, 16.66666))}%`,
      },
      "Overclocked": {
        text: "FL4K has an increased fire rate, with increased fire rate after a reload.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate After Reloading +${percent(rank, 2)}%,
          Fire Rate +${percent(rank, 2)}%,
          Duration 4 seconds`,
      },
    },
    "3": {
      "Not My Circus": {
        text: "FL4K's pet taunts enemies after Fade Away ends. The pet gains damage resistance after taunting.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Pet Taunt Duration 6 seconds, 
          Pet Damage Reduction +80%`,
      },
      "Lick The Wounds": {
        text: "FL4K's pet can revive them in Fight For Your Life",
        ranks: 1,
      },
      "Turn Tail And Run": {
        text: "FL4K constantly regenerates health and gains damage reduction while moving. FL4K has increased gun damage and fire rate while standing still.",
        ranks: 3,
        effect: (rank, level) => `Damage Reduction While Moving +${percent(rank, 6.5)}%,
          Health Generation While Moving +${percent(rank, 0.3)}% of Max Health/second,
          Gun Damage While Still +${percent(rank, 8.3)}%,
          Fire Rate While Still +${percent(rank, 4)}%`,
      },
      "Beefcake Jabber": {
        text: "FL4K's Jabber is now a Beefcake. Beefcake wields a shotgun, and FL4K gains movement speed and health. Attack Command makes Beefcake summon a melee weapon that knocks enemies back.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed +5%,
          Max Health +10%`,
      },
    },
    "4": {
      "Until You Are Dead": {
        text: "Fade Away's health regeneration and movement speed last after the skill ends.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Post Cloak Duration 10 seconds`,
      },
      "The Fast And The Furryous": {
        text: "FL4K gains increased gun damage and movement speed when above half health.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage +${percent(rank, 8)}%,
          Movement Speed +${Math.round(percent(rank, 3.33333))}%`,
      },
      "Hidden Machine": {
        text: "FL4K deals more damage against targets not attacking them.",
        ranks: 5,
        effect: (rank, level) => `Damage +${percent(rank, 6)}%`,
      },
      "Gunslinger Jabber": {
        text: "FL4K's Jabber is now a Gunslinger. Gunslinger has upgraded weapons and wields a submachine gun. FL4K gains increased critical damage and movement speed. Attack Command causes the Gunslinger to wield a rocket launcher for a time.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Movement Speed +5%,
          Critical Hit Damage +5%`,
      },
    },
    "5": {
      "Unblinking Eye": {
        text: "Hitting the same target multiple times increases FL4K's critical damage. Unblinking Eye resets on three hits.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Critical Hit Damage +75% per hit`,
      },
      "Rage And Recover": {
        text: "Killing an enemy increases pet health regeneration.",
        ranks: 5,
        effect: (rank, level) => `Health Regeneration +${percent(rank, 1.6)}% of Missing Health/second,
          Duration 3 seconds`,
      },
    },
    "6": {
      "The Power Inside": {
        text: "FL4K and their pet gains increased damage after FL4K activates an Action Skill. The effect for FL4K is doubled if their health is full.",
        ranks: 1,
        effect: (rank, level) => `Damage +25%,
          Duration 15 seconds`,
      },
    },
  },
  "Master": {
    "0": {
      "Guard Skag": {
        text: "FL4K summons a Skag to follow them, which increases their damage. Using Attack Command causes the skag to vomit acid on enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage +5%`,
      },
      "Gamma Burst": {
        text: "FL4K teleports their pet to a target location, causing an explosion of radiation damage. FL4K's pet becomes irradiated, making them bigger and causing them to deal radiation damage to enemies. Gamma Busrt can also revive a downed pet to 30% health, but doubles the cooldown time.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Damage 56,
          Duration 20 seconds,
          Cooldown 30 seconds`,
      },
    },
    "1": {
      "Ferocity": {
        text: "Increased FL4K's pet damage.",
        ranks: 5,
        effect: (rank, level) => `Pet Damage +${percent(rank, 10)}%`,
      },
      "Persistence Hunter": {
        text: "Increased FL4K's gun damage and action skill duration.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage +${percent(rank, 4)}%,
          Action Skill Duration +${percent(rank, 15)}%`,
      },
      "Go For The Eyes!": {
        text: "FL4K's pet's first attack on a enemy is a guaranteed critical hit.",
        ranks: 5,
        effect: (rank, level) => `Pet Critical Hit Damage ${percent(rank, 15)}%`,
      },
    },
    "2": {
      "Atomic Aroma": {
        text: "After Gamma Burst, FL4K's pet gains radiation damage, dealing damage to enemies around it.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Radiation Damage 4 per second`,
      },
      "Who Rescued Who?": {
        text: "When FL4K's pet damages a enemy, FL4K regenerates health. FL4K damaging an enemy regenerates their pet's health.",
        ranks: 5,
        effect: (rank, level) => `Converts +${percent(rank, 1)}% of Damage Dealt into Pet Health,
          Health Regeneration +${percent(rank, 0.4)}% of Max Health/second`,
      },
      "He Bites!": {
        text: "When FL4K's pet takes damage, the pet reflects damage back to the enemy.",
        ranks: 3,
        effect: (rank, level) => `Damage Reflected +${percent(rank, 5)}%`,
      },
      "Frenzy": {
        text: "When FL4K's pet damages an enemy, both FL4K and their pet gain stacks of Frenzy, which increases their damage for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Damage +${percent(rank, 0.8)}%,
          "Max Frenzy Stacks 10`,
      },
    },
    "3": {
      "Empathic Rage": {
        text: "FL4K deals additional damage while Gamma Burst is active.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Damage +20%`,
      },
      "Psycho Head On A Stick": {
        text: "When FL4K kills an enemy, their pet gains bonus movement speed and damage.",
        ranks: 1,
        effect: (rank, level) => `Pet Movement Speed 12%,
          Pet Damage 10%,
          Duration 8 seconds`,
      },
      "Hive Mind": {
        text: "FL4K shares their damage taken with their pet.",
        ranks: 3,
        effect: (rank, level) => `Damage Shared ${percent(rank, 5)}%`,
      },
      "Great Horned Skag": {
        text: "FL4K summons a Great Horned Skag, which increases their damage and gun damage. Attack Command makes the Great Horned Skag charge enemies and knock them up.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage +5%,
          Gun Damage +10%`,

      },
    },
    "4": {
      "Endurance": {
        text: "If FL4K or their pet kill an enemy during Gamma Burst, Gamma Burst's duration is extended and the pet damage grows. This can happen up to five times.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Skill Duration +3 seconds per kill,
          Pet Damage +10% per kill`,
      },
      "Barbaric Yawp": {
        text: "FL4K's pet bonus skills are more effective.",
        ranks: 5,
        effect: (rank, level) => `Pet Bonuses +${percent(rank, 20)}%`,
      },
      "Mutated Defenses": {
        text: "FL4K's pet gains bonus health regeneration and defenses if it reaches low health.",
        ranks: 1,
        effect: (rank, level) => `Damage Reduction +30%
          Health Regeneration +40% of Max Pet Health
          Cooldown 15 seconds`,
      },
      "Eridian Skag": {
        text: "FL4K summons an Eridian Skag, increasing their fire rate and damage. Attack Command causes the Eridian Skag to summon a singularity, drawing enemies in",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Damage +5%,
          Fire Rate +5%`,
      },
    },
    "5": {
      "Burst Aid": {
        text: "After Gamma Burst, FL4K and allies can stand near their pet's exit point to regenerate health.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration +20% of Max Health/second`,
      },
      "Pack Tactics": {
        text: "FL4K and their pet gain bonus health and damage.",
        ranks: 3,
        effect: (rank, level) => `Pet And FL4K Damage +${percent(rank, 5)}%,
          Pet And FL4K Maximum Health +${percent(rank, 5)}%`,
      },
      "Shared Spirit": {
        text: "When FL4K is at low health, they share more damage with their pet.",
        ranks: 1,
        effect: (rank, level) => `Damage Shared +50%`,
      },
    },
    "6": {
      "Dominance": {
        text: "Overrides FL4K's melee attack. FL4K dominates an enemy with their melee, turning them into an ally for a short time. This duration is doubled for beast enemies. Dominated enemies constantly lose health, can only be dominated once, and FL4K can only dominate one enemy at a time.",
        ranks: 1,
        effect: (rank, level) => `Target Loses 2% of Max Health/second,
          Duration 12 seconds`,
      },
    },
  },
  "Hunter": {
    "0": {
      "Spiderant Centurion": {
        text: "FL4K summons a Spiderant, which regenerates FL4K's health. Attack Command makes the Spiderant charge into enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration 1% of Max Health/second`,
      },
      "Rakk Attack!": {
        text: "FL4K sends two Rakks to attack enemies. This skill has multiple charges per activation.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `Damage 35,
          Cooldown 18 seconds`,
      },
    },
    "1": {
      "Interplanetary Stalker": {
        text: "FL4K gains a stack of Interplanetary Stalker after killing an enemy, which increases their damage. FL4K also gains unique bonuses depending on the type of enemy killed, stacking up to three times per enemy type.",
        ranks: 5,
        effect: (rank, level) => `Damage +${percent(rank, 2)}%/stack,
          Human Bonus +${percent(rank, 3)}% Action Skill Damage/stack,
          Robot Bonus +${percent(rank, 1.5)}% Corrosive Damage/stack,
          Beast Bonus +${percent(rank, 2)}% Movement Speed/stack,
          Max Stacks 3`,
      },
      "Leave No Trace": {
        text: "Critical hits have a chance to refund some ammo to the magazine.",
        ranks: 3,
        effect: (rank, level) => `Chance to add ammo ${percent(rank, 12)}%`,
      },
      "Second Intention": {
        text: "Killing an enemy increases FL4K's reload speed. Critical kills increase the bonus.",
        ranks: 5,
        effect: (rank, level) => `Reload Speed +${Math.round(percent(rank, 2.6))}%,
          Critical Kill Reload Speed +${Math.round(percent(rank, 4.6))}%,
          Critical Kill Reload Speed Duration 5 seconds`,
      },
    },
    "2": {
      "Rakk Open A Cold One": {
        text: "FL4K's Rakks deal Cryo damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Deals Cryo Elemental Damage`,
      },
      "Hunter's Eye": {
        text: "When FL4K fights different kinds of enemies, they earn bonuses.",
        ranks: 5,
        effect: (rank, level) => `Critical Hit Damage +${percent(rank, 3)}% vs. Humans,
          Armor Damage +${percent(rank, 6)}% vs. Robots,
          Damage Reduction +${getHuntersEyeDamageReduction(rank)}% vs. Beasts`,
      },
      "Head Count": {
        text: "Critical hits have a chance to reduce the Action Skill cooldown.",
        ranks: 3,
        effect: (rank, level) => `Cooldown Time Reduction Chance +${percent(rank, 10)}%,
          Cooldown Time -2 seconds`,
      },
      "Ambush Predator": {
        text: "FL4K's handling and critical damage are increased when no enemies are nearby.",
        ranks: 5,
        effect: (rank, level) => `Critical Hit Damage +${percent(rank, 4)}%,
          Handling +${getAmbushPredatorHandling(rank)}%`,
      },
    },
    "3": {
      "Falconer's Feast": {
        text: "FL4K's Rakks steal health for them.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Health Returned 7% of Max Health`,
      },
      "Two F4ng": {
        text: "FL4K has a chance to fire an extra attack per shot.",
        ranks: 5,
        effect: (rank, level) => `Extra Projectile Chance ${percent(rank, 5)}%`,
      },
      "Spiderant Scorcher": {
        text: "FL4K's Spiderant is now a Scorcher, which deals Incendiary damage to nearby enemies. FL4K regenerates health and gains elemental resistance. Attack Command makes the Scorcher charge enemies.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration +1% of Max Health/second,
          Elemental Damage +10%`,
      },
    },
    "4": {
      "Flock'N'Load": {
        text: "FL4K sends forward additional Rakk.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Additional Rakk +2`,
      },
      "Big Game": {
        text: "FL4K's Hunter skills are more powerful and last longer.",
        ranks: 3,
        effect: (rank, level) => `Hunter Skill Effects +${percent(rank, 10)}%,
          Hunter Skill Duration +${Math.round(percent(rank, 33.33333))}%`,
      },
      "The Most Dangerous Game": {
        text: "Killing a Badass (or higher rank) enemy increases critical hit damage, gun damage, and handling. High rank enemies also come with a cash reward.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage +${percent(rank, 8)}%,
          Critical Hit Damage +${Math.round(percent(rank, 3.33333))}%,
          Handling +${getMostDangerousGameHandling(rank)}%,
          Duration 120 seconds`,
      },
      "Spiderant Countess": {
        text: "FL4K's Spiderant is now a Countess, and FL4K regenerates health and has damage reduction. The attack command makes the Countess burrow underground and emerge later, dealing Corrosive damage.",
        type: SKILLS.AUGMENT_DIAMOND,
        ranks: 0,
        effect: (rank, level) => `Health Regeneration +1% of Max Health/second,
          Damage Reduction +5%`,
      },
    },
    "5": {
      "Rakkcelerate": {
        text: "FL4K's Rakks cooldown faster and have an additional charge.",
        type: SKILLS.AUGMENT_CHEVRON,
        ranks: 0,
        effect: (rank, level) => `Cooldown Rate +20%,
          Skill Charges +1`,
      },
      "Galactic Shadow": {
        text: "FL4K deals bonus critical hit damage and enemies are less likely to attack them.",
        ranks: 1,
        effect: (rank, level) => `Critical Hit Damage 15%`,
      },
      "Grim Harvest": {
        text: "FL4K deals bonus gun and Action Skill damage.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage ${percent(rank, 3)}%,
          Action Skill Damage ${percent(rank, 5)}%`,
      },
    },
    "6": {
      "Megavore": {
        text: "FL4K has a chance to land a critical hit on any enemy body part.",
        ranks: 1,
        effect: (rank, level) => `Critical Hit Chance +20%`,
      },
    },
  },
};

export default skills;
