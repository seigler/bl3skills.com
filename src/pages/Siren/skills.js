/* eslint-disable space-before-function-paren */
import SKILLS from '@constants/skills';

function percent(rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}
function flat(rank, level, unit) {
  return Math.floor(rank * unit);
}

// Arms Deal Splash Damage Resistance
function getArmsDealSplashDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 12;
    case 2:
      return 21;
    case 3:
      return 28;
    case 4:
      return 35;
    case 5:
      return 40;
    default:
      return 0;
  }
}

// Helping Hand(s) Damage Resistance
function getHelpingHandsDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 12;
    case 2:
      return 21;
    case 3:
      return 28;
    case 4:
      return 35;
    case 5:
      return 40;
    default:
      return 0;
  }
}

// Mindfulness Shield Regeneration Delay
function getMindfulnessShieldRegenerationDelay(rank) {
  switch (rank) {
    case 1:
      return 9;
    case 2:
      return 17;
    case 3:
      return 23;
    default:
      return 0;
  }
}

// One With Nature Elemental Damage Resistance
function getOneWithNatureElementalDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 12;
    case 2:
      return 21;
    case 3:
      return 28;
    case 4:
      return 35;
    case 5:
      return 40;
    default:
      return 0;
  }
}

// Fast Hand(s) Reload Speed
function getFastHandsReloadSpeed(rank) {
  switch (rank) {
    case 1:
      return 7;
    case 2:
      return 14;
    case 3:
      return 19;
    default:
      return 0;
  }
}

// Fast Hand(s) Weapon Swap Speed
function getFastHandsWeaponSwapSpeed(rank) {
  switch (rank) {
    case 1:
      return 16;
    case 2:
      return 28;
    case 3:
      return 36;
    default:
      return 0;
  }
}

// Fast Hand(s) Mode Switch Speed
function getFastHandsModeSwitchSpeed(rank) {
  switch (rank) {
    case 1:
      return 16;
    case 2:
      return 28;
    case 3:
      return 36;
    default:
      return 0;
  }
}

// Alacrity Reload Speed After Action Skill
function getAlacrityReloadSpeedAfterActionSkill(rank) {
  switch (rank) {
    case 1:
      return 0.6;
    case 2:
      return 1.2;
    case 3:
      return 1.8;
    case 4:
      return 2.3;
    case 5:
      return 2.9;
    default:
      return 0;
  }
}

// Transcend Accuracy
function getTranscendAccuracy(rank) {
  switch (rank) {
    case 1:
      return 17;
    case 2:
      return 29;
    case 3:
      return 38;
    default:
      return 0;
  }
}

// From Rest Charge Time
function getFromRestChargeTime(rank) {
  switch (rank) {
    case 1:
      return 21;
    case 2:
      return 34;
    case 3:
      return 44;
    default:
      return 0;
  }
}

// Wrath Gun Damage
function getWrathGunDamage(rank) {
  switch (rank) {
    case 1:
      return 6.7;
    case 2:
      return 13.3;
    case 3:
      return 20;
    default:
      return 0;
  }
}

// Wrath Gun Damage After Action Skill
function getWrathGunDamageAfterActionSkill(rank) {
  switch (rank) {
    case 1:
      return 6.7;
    case 2:
      return 13.3;
    case 3:
      return 20;
    default:
      return 0;
  }
}

// Steady Hands Handling
function getSteadyHandsHandling(rank) {
  switch (rank) {
    case 1:
      return 14;
    case 2:
      return 24;
    case 3:
      return 32;
    default:
      return 0;
  }
}

// Steady Hands Accuracy
function getSteadyHandsAccuracy(rank) {
  switch (rank) {
    case 1:
      return 13;
    case 2:
      return 23;
    case 3:
      return 31;
    default:
      return 0;
  }
}

/* eslint-disable quotes */
const skills = {
  "Brawl": {
    "0": {
      "Phaseslam": {
        text: "Amara leaps into the air and Slams the ground, dealing damage to all nearby enemies and knocking them up. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 98)} (increases with character level)\nCooldown: 35 Seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Root to Rise": {
        ranks: 5,
        text: "Amara gains increased Maximum Health.",
        effect: (rank, level) => `Maximum Health: +${percent(rank, 8)}%`,
      },
      "Personal Space": {
        ranks: 3,
        text: "Amara's weapon shots deal Bonus Damage based on the distance to her target. The closer the target, the greater the bonus.",
        effect: (rank, level) => `Bonus Damage: Up to +${percent(rank, 18)}% of damage dealt`,
      },
      "Clarity": {
        ranks: 5,
        text: "Amara constantly regenerates health. The lower her health, the more powerful the regeneration. After using an Action Skill, this bonus is doubled for a few seconds.",
        effect: (rank, level) => `Health Regen: Up to +${percent(rank, 1)}% of Missing Health/sec\nAdditional Regen: Up to +${percent(rank, 1)}% of Missing Health/sec\nDuration: 5 seconds`,
      },
    },
    "2": {
      "Arms Deal": {
        ranks: 5,
        text: "Amara deals increased Splash Damage and takes reduced Splash Damage.",
        effect: (rank, level) => `Splash Damage: +${percent(rank, 4)}%\nSplash Damage Resistance: +${getArmsDealSplashDamageResistance(rank)}%`,
      },
      "Samsara": {
        ranks: 3,
        text: "Whenever Amara deals damage to an enemy with her Action Skill, she adds a stack of Samsara. For every stack of Samsara, Amara gains increased Gun Damage and Health Regeneration for a few seconds. Stacks decay after a few seconds.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 1.7)}% per stack\nHealth Regen: +${percent(rank, 1.7)}% of Missing Health/sec per stack\nMaximum Stacks: 5\nDuration: 20 seconds`,
      },
      "Helping Hand(s)": {
        ranks: 5,
        text: "For a few seconds after using her Action Skill, Amara's arms remain active and grant her Damage Resistance.",
        effect: (rank, level) => `Damage Resistance: +${getHelpingHandsDamageResistance(rank)}%\nDuration: 15 seconds`,
      },
      "Blight Tiger": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Corrosive Damage.",
        effect: (rank, level) => `Action Skill Element: Corrosive.`,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "Fracture": {
        ranks: 0,
        text: "Amara summons a line of fists that erupt from the ground, dealing damage to enemies in front of Amara. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 88)} (increases with character level)\nCooldown: 28 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Mindfulness": {
        ranks: 3,
        text: "Whenever Amara takes damage, she gains a stack of Mindfulness. For every stack of Mindfulness, Amara gains improved Shield Regeneration Delay and Movement Speed. Stacks decay after a few seconds.",
        effect: (rank, level) => `Shield Regeneration Delay: -${getMindfulnessShieldRegenerationDelay(rank)}% per stack\nMovement Speed: +${percent(rank, 1.4)}% per stack\nMaximum Stacks: 25\nDuration: 5 seconds`,
      },
      "Find Your Center": {
        ranks: 1,
        text: "Amara gains increased Melee Damage. Additionally, for a few seconds after using her Action Skill, Amara gains increased Melee Range.",
        effect: (rank, level) => `Melee Damage: +100%\nMelee Range: +75%\nDuration: 20 seconds`,
      },
      "Vigor": {
        ranks: 3,
        text: "Kill Skill. Killing an enemy with Amara's Action Skill grants all allies increased Movement Speed for a few seconds.",
        effect: (rank, level) => `Team Movement Speed: +${percent(rank, 3.333)}%\nDuration: 8 seconds`,
      },
      "Revelation": {
        ranks: 0,
        text: "Amara's Action Skill now creates a Nova when it damages enemies, dealing damage to all nearby enemies.",
        effect: (rank, level) => `Nova Damage: ${flat(rank, level, 41)} (increases with character level)\nAction Skill Damage: -15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Downfall": {
        ranks: 0,
        text: "Amara leaps into the air and shoots an Elemental Beam below her, followed by a Slam. Element: Shock.",
        effect: (rank, level) => `Beam Damage: ${flat(rank, level, 14)} per second (increases with character level)\nSlam Damage: ${flat(rank, level, 95)} (increases with character level)\nCooldown: 47 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "One With Nature": {
        ranks: 5,
        text: "Amara gains increased Maximum Health and Elemental Damage Resistance to her Action Skill Element.",
        effect: (rank, level) => `Maximum Health: +${percent(rank, 5)}%\nElemental Damage Resistance: +${getOneWithNatureElementalDamageResistance(rank)}%`,
      },
    },
    "5": {
      "Do Unto Others": {
        ranks: 1,
        text: "Whenever an enemy damages Amara, she automatically throws an energy orb back at them, dealing Action Skill Elemental Damage. This skill has a short cooldown.",
        effect: (rank, level) => `Cooldown: 8 seconds`,
      },
      "Jab Cross": {
        ranks: 5,
        text: "Whenever Amara deals melee damage to an enemy, she gains increased Action Skill Damage and increased Gun Damage for a few seconds.",
        effect: (rank, level) => `Action Skill Damage: +${percent(rank, 15)}%\nGun Damage: +${percent(rank, 3)}%\nDuration: 10 seconds`,
      },
      "Guardian Angel": {
        ranks: 1,
        text: "When Amara enters Fight For Your Life, she immediately gains a Second Wind, restores her health, and creates an Action Skill Elemental Nova that may knock back nearby enemies. This skill has a long cooldown.",
        effect: (rank, level) => `Health Restored: 50% of Maximum Health\nCooldown: 120 seconds`,
      },
      "Glamour": {
        ranks: 0,
        text: "Enemies damaged by Amara's Action Skill become confused and temporarily attack their allies. However, Action Skill Cooldown is increased. If Amara targets an enemy with Phasegrasp, enemies near the Grasped target are confused as well.",
        effect: (rank, level) => `Confuse Duration: 8 seconds\nAction Skill Damage: -10%\nAction Skill Cooldown: +20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "6": {
      "Blitz": {
        ranks: 1,
        text: "Melee Override. Press [Melee key] while aiming at an enemy to make Amara dash a short distance forward and perform a special melee strike, dealing Elemental Melee Damage. If a Blitz melee attack kills an enemy, Blitz's cooldown is immediately reset.",
        effect: (rank, level) => `Melee Damage: +100%\nCooldown: 8 seconds`,
      },
    },
  },
  "Mystical Assault": {
    "0": {
      "Phasecast": {
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 92)}\nCooldown: 28 Seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Do Harm": {
        ranks: 5,
        text: "Killing an enemy grants Amara a stack of Rush. Activating her Action Skill consumes all Rush stacks. For every stack of Rush consumed, Amara's Action Skill Damage is temporarily increased.",
        effect: (rank, level) => `Action Skill Dmg: +${percent(rank, 0.9)}% per Rush stack consumed\nMaximum Rush Stacks: 10\nDuration: 20 seconds`,
      },
      "Fast Hand(s)": {
        ranks: 3,
        text: "Amara's Reload Speed, Weapon Swap Speed, and Mode Switch Speed are improved.",
        effect: (rank, level) => `Reload Speed: +${getFastHandsReloadSpeed(rank)}%\nWeapon Swap Speed: +${getFastHandsWeaponSwapSpeed(rank)}%\nMode Switch Speed: +${getFastHandsModeSwitchSpeed(rank)}%`,
      },
      "Violent Tapestry": {
        ranks: 5,
        text: "Applying a Status Effect grants Amara a stack of Rush. Activating her Action Skill consumes all Rush stacks. For every stack of Rush consumed, Amara's Status Effect Chance is temporarily increased.",
        effect: (rank, level) => `StatusEffect Chance: +${percent(rank, 0.6)}% per Rush stack consumed\nMaximum Rush Stacks: 10\nDuration: 20 seconds`,
      },
    },
    "2": {
      "Alacrity": {
        ranks: 5,
        text: "Amara gains increased Reload Speed for every stack of Rush. After consuming Rush stacks, this bonus is increased for a few seconds.",
        effect: (rank, level) => `Reload Speed: +${percent(rank, 0.4)}% per Rush stack\nAdditional Reload Speed: +${getAlacrityReloadSpeedAfterActionSkill(rank)}% per Rush stack consumed\nDuration: 8 seconds`,
      },
      "Transcend": {
        ranks: 3,
        text: "Amara gains increased Accuracy and Critical Hit Damage for a few seconds after activating her Action Skill.",
        effect: (rank, level) => `Accuracy: +${getTranscendAccuracy(rank)}%\nCritical Hit Damage: +${percent(rank, 9)}%\nDuration: 12 seconds`,
      },
      "Restless": {
        ranks: 5,
        text: "Amara gains increased Action Skill Cooldown Rate.",
        effect: (rank, level) => `Action Skill Cooldown Rate: +${percent(rank, 5)}%`,
      },
      "Soul Sap": {
        ranks: 0,
        text: "A portion of all damage dealt by Amara's Action Skill is returned to her or a nearby ally as health.",
        effect: (rank, level) => `Action Skill Life Steal: 30% of damage dealt`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "3": {
      "Deliverance": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Whenever Amara's Astral Projection damages an enemy or object, it releases homing Elemental Projectiles that trigger her Action Skill Elemental Effect on enemies. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 86)} (increases with character level)\nElemental Projectiles: 3 per enemy or object hit\nCooldown: 28 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Ascendant": {
        ranks: 1,
        text: "All Action Skill Augments gain increased effects.",
        effect: (rank, level) => `Soul Sap Life Steal: +20%\nAllure Radius: +100%\nGlamour Duration: +50%\nStillness of Mind: Breaks 0.75 sec after taking dmg\nRevelation Damage: +25%`,
      },
      "Stillness of Mind": {
        ranks: 0,
        text: "Enemies damaged by Amara's Action Skill become phaselocked until they are damaged or the duration ends. However, Action Skill Cooldown is increased. If Amara targets an enemy with Phasegrasp, enemies near the Grasped target are also phaselocked.",
        effect: (rank, level) => `Phaselock Duration: 6 seconds\nAction Skill Damage: -25%\nAction Skill Cooldown: +15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Reverberation": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Astral Projection deals increased damage for every enemy it hits. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 88)} (increases with character level)\nDamage Bonus: +50% per enemy hit\nCooldown: 30 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "From Rest": {
        ranks: 3,
        text: "Amara gains improved Fire Rate and Charge Time.",
        effect: (rank, level) => `Fire Rate: +${percent(rank, 4)}%\nCharge Time: +${getFromRestChargeTime(rank)}%`,
      },
      "Laid Bare": {
        ranks: 3,
        text: "Enemies take increased damage from all sources for a few seconds after being damaged by Amara's Action Skill.",
        effect: (rank, level) => `Damage Increase: +${percent(rank, 8.333)}%\nDuration: 8 seconds`,
      },
      "Wrath": {
        ranks: 3,
        text: "Amara gains increased Gun Damage. This effect is increased after she activates her Action Skill for a few seconds.",
        effect: (rank, level) => `Gun Damage: +${getWrathGunDamage(rank)}%\nAdditional Gun Damage: +${getWrathGunDamageAfterActionSkill(rank)}%\nDuration: 8 seconds`,
      },
    },
    "5": {
      "Remnant": {
        ranks: 3,
        text: "When Amara kills an enemy with a Gun or Action Skill, she creates a homing projectile that seeks out a new enemy dealing her Action Skill Elemental Damage. Any Overkill Damage is added to the projectile's damage.",
        effect: (rank, level) => `Remnant Base Damage: ${flat(rank, level, 9)} (increases with character level)`,
      },
      "Awakening": {
        ranks: 3,
        text: "Amara's Rush stacks gain increased effectiveness.",
        effect: (rank, level) => `Rush Stack Effectiveness: +${percent(rank, 10)}%`,
      },
      "Tandava": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself. When it hits a target, it explodes, damaging all nearby enemies. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 91)} (increases with character level)\nCooldown: 35 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
    },
    "6": {
      "Avatar": {
        ranks: 1,
        text: "Amara's Action Skill can be activated while it's cooling down. This skill may only be used once per completed cooldown. Additionally, increases Amara's Maximum Rush Stacks. Additionally, if Amara's Action Skill kills an enemy, it refunds half of her Rush stacks.",
        effect: (rank, level) => `Maximum Rush Stacks: +10`,
      },
    },
  },
  "Fist of the Elements": {
    "0": {
      "Phasegrasp": {
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Some enemies are immune to being Grasped and instantly take damage instead. Element: Shock.",
        effect: (rank, level) => `Skill Duration: 7 seconds\nCooldown: 16 seconds\nGrasp Immune Damage: ${flat(rank, level, 28)} (increases with character level)`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Anima": {
        ranks: 5,
        text: "Amara's Status Effects deal increased damage over time and have increased duration. Her Action Skill Status Effect deals further increased damage.",
        effect: (rank, level) => `Action Skill Status Effect Damage: +${percent(rank, 8)}%\nOther Status Effect Damage: +${percent(rank, 4)}%\nStatus Effect Duration: +${percent(rank, 20)}%`,
      },
      "Steady Hands": {
        ranks: 3,
        text: "Amara gains increased Weapon Handling and Accuracy.",
        effect: (rank, level) => `Handling: +${getSteadyHandsHandling(rank)}%\nAccuracy: +${getSteadyHandsAccuracy(rank)}%`,
      },
      "Infusion": {
        ranks: 5,
        text: "Convert a portion of damage dealt by Amara's weapons into her Action Skill Element.",
        effect: (rank, level) => `Converted Damage: ${percent(rank, 8)}%`,
      },
    },
    "2": {
      "Tempest": {
        ranks: 5,
        text: "Amara deals increased Elemental Damage. Shock Damage is further increased.",
        effect: (rank, level) => `Shock Damage: +${percent(rank, 8)}%\nOther Elemental Damage: +${percent(rank, 6)}%`,
      },
      "Illuminated Fist": {
        ranks: 1,
        text: "Amara gains increased Melee Damage and her Melee Damage is converted to Action Skill Element.",
        effect: (rank, level) => `Melee Damage: +75%`,
      },
      "Wildfire": {
        ranks: 5,
        text: "Whenever Amara applies a Status Effect to an enemy, it has a chance to spread to a nearby enemy.",
        effect: (rank, level) => `Spread Chance: +${percent(rank, 8)}%`,
      },
      "Soulfire": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Incendiary Damage.",
        effect: (rank, level) => `Action Skill Element: Incendiary.`,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "The Eternal Fist": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Whenever the Grasped enemy is killed, a new fist seeks out and Grasps a new target. Some enemies are immune to being Grasped and instantly take damage instead. Element: Shock.",
        effect: (rank, level) => `Bonus Targets: Up to +4\nDuration: 7 seconds\nCooldown: 20 seconds\nGrasp Immune Damage: ${flat(rank, level, 28)} (increases with character level)`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Dread": {
        ranks: 1,
        text: "Amara's Gun Damage is increased for a few seconds after an enemy is Grasped. Whenever any player kills a Grasped enemy, their current weapon is instantly reloaded.",
        effect: (rank, level) => `Gun Damage: +15%\nDuration: 8 seconds`,
      },
      "Allure": {
        ranks: 0,
        text: "Amara's Action Skill creates a singularity that pulls in enemies.",
        effect: (rank, level) => `Duration: 2.5 seconds\nAction Skill Damage: -20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Indiscriminate": {
        ranks: 3,
        text: "Amara's bullets that damage enemies have a chance to ricochet and deal decreased damage to other nearby enemies. Ricochet Chance and Damage are increased if target is affected by Phasegrasp or Stillness of Mind.",
        effect: (rank, level) => `Ricochet Chance: +${percent(rank, 10)}%\nRicochet Damage: 50% of damage dealt\nAction Skill Ricochet Chance: +${percent(rank, 20)}%\nAction Skill Ricochet Damage: 75% of damage dealt`,
      },
      "Deep Well": {
        ranks: 1,
        text: "Amara gains increased Magazine Size with elemental weapons.",
        effect: (rank, level) => `Magazine Size: +20%`,
      },
      "Catharsis": {
        ranks: 3,
        text: "Whenever Amara triggers an elemental effect on an enemy, when that enemy dies that enemy explodes, dealing her attuned element damage along with any other element that is currently inflicted upon that enemy. This skill has a short cooldown.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 4)} (increases with character level)\nCooldown: 8 seconds`,
      },
      "Ties That Bind": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Enemies near the Grasped target are linked, and any damage dealt to a linked target is shared between all other linked targets. Some enemies are immune to being Grasped and instantly take damage instead. Element: Shock.",
        effect: (rank, level) => `Linked Damage: 35% of damage dealt\nDuration: 7 seconds\nCooldown: 18 seconds\nGrasp Immune Damage: ${flat(rank, level, 34)} (increases with character level)`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
    },
    "5": {
      "Fist Over Matter": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. After Grasping the targeted enemy, large fists appear and constantly smash the area, dealing damage to nearby enemies. Some enemies are immune to being Grasped and instantly take damage instead. Element: Shock.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 35)} (increases with character level)\nDuration: 7 seconds\nCooldown: 28 seconds\nGrasp Immune Damage: ${flat(rank, level, 39)} (increases with character level)`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Sustainment": {
        ranks: 5,
        text: "Amara gains Life Steal whenever she deals Elemental Damage with her weapon.",
        effect: (rank, level) => `Elemental Weapon Life Steal: +${percent(rank, 4)}% of damage dealt`,
      },
      "Conflux": {
        ranks: 5,
        text: "Whenever Amara applies a Status Effect to an enemy, she gains a chance to randomly Electrocute, Ignite, or Melt that enemy.",
        effect: (rank, level) => `Extra Status Effect Chance: +${percent(rank, 7)}%`,
      },
    },
    "6": {
      "Forceful Expression": {
        ranks: 1,
        text: "Amara's guns deal Bonus Elemental Damage based on her Action Skill Element.",
        effect: (rank, level) => `Bonus Elemental Damage: +18% of damage dealt`,
      },
    },
  },
  "Enlightened Force": {
    "0": {
      "Phaseflare": {
        text: "Amara summons an Orb of Elemental Energy that deals constant elemental damage to nearby enemies.\n\nPressing [Melee key] near the Orb causes it to fly towards toward an enemy and damage them. Addiontally, every time Amara uses a melee attack on the Orb, it gains Increased Damage based on the damage she dealt to it.\n\nPressing [Action Skill key] causes the Orb to return to Amara.",
        effect: (rank, level) => `Impact Damage: ${flat(rank, level, 27)} (increases with character level)\nArea Damage: ${flat(rank, level, 5)} per second (increases with character level)\nDuration: 30 seconds\nCooldown:48seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0
      }
    },
    "1": {
      "Trust In Yourself": {
        ranks: 5,
        text: "Whenever an enemy breaks Amara's shield, she gains increased Reload Speed, Charge Speed, and Weapon Swap Speed for a short time. This effect is doubled if Amara's shield is broken by a melee attack.",
        effect: (rank, level) => `Reload Speed: ${percent(rank, 4)}%\nCharge Speed: +${percent(rank, 8)}%\nWeapon Swap Speed: +${percent(rank, 16)}\nDuration: 24 seconds`,
      },
      "No Mistakes In Nature": {
        ranks: 5,
        text: "Whenever Amara inflicts a Status Effect on an enemy, she gains increased Melee Damage for a short time.",
        effect: (rank, level) => `Melee Damage: +${percent(rank, 13)}%\nDuration: 12 seconds`
      },
      "Heavy Rain": {
        ranks: 5,
        text: "Amara's weapons gain increased Projectile Speed and Splash Damage.",
        effect: (rank, level) => `Projectile Speed: +${percent(rank, 14)}%\nSplash Damage: +${percent(rank, 7)}%`
      }
    },
    "2": {
      "Glow Up": {
        ranks: 0,
        text: "Instead of dealing Splash Damage to enemies, Amara's Orb grants nearby allies Health Regeneration. Amara my also press [Melee key] while near the orb to send it to a downed ally, granting them a Second Wind.",
        effect: (rank, level) => `Impact Damage: ${flat(rank, level, 29)}\nHealing: ${flat(rank, level, 6)} health per second\nDuration: 34 seconds\n Cooldown: 28 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Go With The Flow": {
        ranks: 3,
        text: "Whenever Amara Freezes an enemy, she gains increased Movement Speed and Weapon Damage for a short time.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 7)}%\nMovement Speed: +${percent(rank, 3)}%\nDuration: 16 seconds`
      },
      "Unweave The Rainbow": {
        ranks: 3,
        text: "Amara deals Bonus Damage of her attuned element whenever she deals Melee Damage or Splash Damage to frozen enemies.",
        effect: (rank, level) => `Bonus Damage: ${percent(rank, 11)}% of damage dealt`
      },
      "Ebb And Flow": {
        ranks: 3,
        text: "Whenever Amara kills an enemy with a melee attack, she gains a portion of the damage dealt back as health.",
        effect: (rank, level) => `Life Steal: ${percent(rank, 21)}% of damage dealt`
      },
      "Cold Hearted": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Cryo Damage.",
        effect: (rank, level) => `Action Skill Element: Cryo.`,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "Shooting Star": {
        ranks: 0,
        text: "Amara summons an Orb of Elemental Energy that deals constant elemental damage to nearby enemies. Pressing [Melee key] near the Orb causes it to fly forwards toward an enemy and damage them which also increases the amount of Overal Damage the Orb deals to enemies. Additionally, the Elemental Orb continually fires Elemental Projectiles at the last enemy Amara damaged. Pressing [Action Skill key] causes the ORb to return to Amara. ",
        effect: (rank, level) => `Impact Damage: ${flat(rank, level, 21)}\nArea Damage: ${flat(rank, level, 4)} per second\nDuration: 26 seconds\nCooldown: 44 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Combo Breaker": {
        ranks: 1,
        text: "Killing an enemy with Melee Damage has a chance to reset Amara's Action Skill Cooldown.",
        effect: (rank, level) => `Reset Chance: ${percent(rank, 20)}%`
      },
      "Expedite": {
        ranks: 0,
        text: "Whenever Amara kills an enemy with her Action Skill, she gains increased Action Skill Cooldown Rate until she activates her Action Skill again.",
        effect: (rank, level) => `Cooldown Rate: +30% per enemy killed`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Joyful Freedom": {
        ranks: 5,
        text: "After activating her Action Skill, Amara gains increased Melee Damage for a short time.",
        effect: (rank, level) => `Melee Damage: ${percent(rank, 14)}%\nDuration: 12 seconds`
      },
      "Burn Both Ends": {
        ranks: 5,
        text: "After activating her Action Skill, Amara gains Increased Threat for a short time, drawing the attention of all enemies in a huge radius.\n\nWhenever Amara is dealt damage by an enemy, she gains Increased Damage for a short time. This effect stacks.",
        effect: (rank, level) => `Damage: +${percent(rank, 1)}%\nMax Stacks: 15\nDuration: 8 seconds`
      },
    },
    "5": {
      "Light Fantastic": {
        ranks: 0,
        text: "Amara summons an Orb of Elemental Energy that deals constant elemental damage to nearby enemies. Whenever Amara damages an enemy, the Elemental Orb automatically travels to that enemy, the Elemental Orb gains Increased Damage. Pressing [Action Skill key] causes the Orb to return to Amara.",
        effect: (rank, level) => `Impact Damage: ${flat(rank, level, 18)}\nArea Damage: ${flat(rank, level, 4)} per second\nDuration: 24 seconds\nCooldown: 44 seconds`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Body And Mind": {
        ranks: 3,
        text: "Kill Skill. Amara's melee attacks deal Bonus Splash Damage for a short time.",
        effect: (rank, level) => `Splash Damage: ${flat(rank, level, 4)}\nDuration: 12 seconds`
      },
      "Free The Soul": {
        ranks: 1,
        text: "Kill Skill. Whenever Amara kills a frozen enemy, splinters fly out from that enemy and home to nearby enemies, dealing Cryo Damage. This skill has a short cooldown.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 35)}\nCooldown: 3 seconds`
      },
      "Atman": {
        ranks: 3,
        text: "Amara gains increased Skill Damage.",
        effect: (rank, level) => `Skill Damage: +${percent(rank, 9)}%`
      },
    },
    "6": {
      "Clear The Mind": {
        ranks: 1,
        text: "Kill Skill. After killing an enemy, Amara ignores enemie's Elemental Damage Resistance for a short time. This does not affect Elemental Immunity.",
        effect: (rank, level) => `Duration: 8 seconds`
      },
    }
  }
};

export default skills;
