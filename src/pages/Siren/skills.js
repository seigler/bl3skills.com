import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}
function flat (rank, level, unit) {
  return Math.floor(rank * unit);
}

/* eslint-disable quotes */
const skills = {
  "Brawl": {
    "0": {
      "Phaseslam": {
        text: "Amara leaps into the air and Slams the ground, dealing damage to all nearby enemies and knocking them up.",
        effect: (rank, level) => `Damage ${flat(rank, level, 98)}, Cooldown: 35 Seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Root to Rise": {
        ranks: 5,
        text: "Amara gains inceased Max Health.",
        effect: (rank, level) => `Max Health +${percent(rank, 8)}%`,
      },
      "Personal Space": {
        ranks: 3,
        text: "Amara's weapon shots deal Bonus Damage based on the distance to her target. The closer the target the greater the bonus.",
        effect: (rank, level) => `Bonus Damage: Up to ${percent(rank, 12)}% of damage dealt`,
      },
      "Clarity": {
        ranks: 5,
        text: "Amara constantly regenerates health. The lower her health the more powerful the regeneration. After using an Action Skill, this bonus is doubled for a few seconds.",
        effect: (rank, level) => `Health Regeneration: up to +${percent(rank, 1)}% missing Health / sec, Duration: 5 seconds`,
      },
    },
    "2": {
      "Arms Deal": {
        ranks: 5,
        text: "Amara deals increased Splash Damage, and takes reduced Splash Damage.",
        effect: (rank, level) => `Splash Damage: +${percent(rank, 4)}%, Splash Damage Reduction +${percent(rank, 12)}%`,
      },
      "Samsara": {
        ranks: 3,
        text: "Whenever Amara deals damage to an enemy with her Action Skill, she adds a stack of Samsara. For every stack of Samsara, Amara gains increased Gun Damage and Health Regeneration for a few seconds. Stacks decay after a few seconds.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 1.7)}%, Health Regeneration: +${percent(rank, 1.7)}%, Max Samara Stacks: 5, Duration: 20 seconds`,
      },
      "Helping Hand(s)": {
        ranks: 5,
        text: "For a few seconds after using her Action Skill, Amara's arms remain active and grant her Damage Reduction.",
        effect: (rank, level) => `Damage Reduction: +${percent(rank, 12)}%, Duration: 15 seconds`,
      },
      "Blight Tiger": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Corrosive Damage.",
        effect: (rank, level) => ``,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "Fracture": {
        ranks: 0,
        text: "Amara summons a line of fists that erupt from the ground, dealing damage to enemies in front of Amara.",
        effect: (rank, level) => `Damage ${flat(rank, level, 88)}, Cooldown 28 sec`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Mindfulness": {
        ranks: 3,
        text: "Whenenever Amara takes damage, she gains a stack of Mindfulness. For every stack of Mindfulness, Amara gains improved Shield Regeneration Dely and Movement Speed. Stacks decay after a few seconds.",
        effect: (rank, level) => `Shield Regeneration Delay: -${percent(rank, 9)}%, Movement Speed: +${percent(rank, 1.4)}%, Max Mindfulness Stacks: 25, Duration 5 seconds`,
      },
      "Find Your Center": {
        ranks: 1,
        text: "Amara gains increased Melee Damage. Additionally, for a few seconds after using her Action Skill, Amara gains increased Melee Range.",
        effect: (rank, level) => `Melee Damage: +100%, Duration: 20 seconds, Melee Range: +75%`,
      },
      "Vigor": {
        ranks: 3,
        text: "Kill Skill. Killing an enemy with Amara's Action Skill grants all allies increased Movement Speed for a few seconds.",
        effect: (rank, level) => `Team Movement Speed: +${percent(rank, 3.3)}%, Duration: 8 sec`,
      },
      "Revelation": {
        ranks: 0,
        text: "Amara's Action Skill now creates a Nova when it damages enemies, dealing damage to all nearby enemies.",
        effect: (rank, level) => `Nova Damage ${flat(rank, level, 41)}, Action Skill Damage -15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Downfall": {
        ranks: 0,
        text: "Amara leaps into the air and shoots an Elemental Beam below her, followed by a Slam.",
        effect: (rank, level) => `Cooldown: 47 seconds, Damage ${flat(rank, level, 95)}, Beam Damage ${flat(rank, level, 14)} / second`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "One With Nature": {
        ranks: 5,
        text: "Amara gains increased Max Health and Elemental Damage Resistance to her Action Skill Element.",
        effect: (rank, level) => `Max Health: +${percent(rank, 5)}%, Elemental Damage Reduction: +${percent(rank, 12)}%`,
      },
    },
    "5": {
      "Do Unto Others": {
        ranks: 1,
        text: "Whenever an emey damages Amara, she automatically throws an energy orb back at them, dealing Action Skill Elemental Damage. This skill has a short cooldown.",
        effect: (rank, level) => `Cooldown: 8 seconds`,
      },
      "Jab Cross": {
        ranks: 5,
        text: "Whenever Amara deals melee damage to an enemy, she gains increased Action Skill Damage and increased Gun Damage for a few seconds.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}%, Action Skill Damage: +${percent(rank, 15)}%, Duration: 10 seconds`,
      },
      "Guardian Angel": {
        ranks: 1,
        text: "When Amara enters Fight For Your Life, she immediately gains a Second Wind, restores her health, and creates an Action Skill Elemental Nova that may knock back nearby enemies. This skill has a long cooldown.",
        effect: (rank, level) => `Max Health Restored: 100% of Max Health, Cooldown: 120 sec`,
      },
      "Glamour": {
        ranks: 0,
        text: "Enemies damaged by Amara's Action Skill become confused and temporarily attack their allies. However, Action Skill Cooldown is increased. If Amara targets an enemy with Phasegrasp, enemies near the Grasped target are confused as well.",
        effect: (rank, level) => `Confuse Duration: 8 seconds, Cooldown: +20%, Damage: -30%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "6": {
      "Blitz": {
        ranks: 1,
        text: "Melee Override. Press V while aiming at an enemy to make Amara dash a short distance forward and perform a special melee strike, dealing Elemental Melee Damage. If a Blitz melee attack kills an enemy, Blitz's cooldown is immediately reset.",
        effect: (rank, level) => `Cooldown: 8 seconds, Melee Damage: +100%`,
      },
    },
  },
  "Mystical Assault": {
    "0": {
      "Phasecast": {
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path.",
        effect: (rank, level) => `Damage ${flat(rank, level, 92)}, Cooldown: 28 Seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Do Harm": {
        ranks: 5,
        text: "Killing an enemy grants Amara a stack of Rush. Activating her Action Skill consumes all Rush stacks. For every stack of Rush consumed, Amara's Action Skill Damage is temporarily increased.",
        effect: (rank, level) => ` Action Skill Damage: +${percent(rank, 0.9)}% per stack consumed, Duration 20 seconds`,
      },
      "Fast Hand(s)": {
        ranks: 3,
        text: "Amara's Reload Speed, Weapon Swap Speed, and Mode Switch Speed are improved.",
        effect: (rank, level) => `Reload Speed: +${percent(rank, 7)}%, Weapon Swap Speed: +${percent(rank, 16)}%, Mode Switch Speed: +${percent(rank, 16)}%`,
      },
      "Violent Tapestry": {
        ranks: 5,
        text: "Applying a Status Effect grants Amara a stack of Rush. For every stack of Rush consumed, Amara's Status Effect Chance is temporarily increased.",
        effect: (rank, level) => `Max Rush Stacks: 10, Effect Chance: +${percent(rank, 0.6)}%, Duration: 20 sec`,
      },
    },
    "2": {
      "Alacrity": {
        ranks: 5,
        text: "Amara gains increased Reload Speed for every stack of Rush. After consuming Rush stacks, this bonus is increased for a few seconds.",
        effect: (rank, level) => `Reload Speed: +${percent(rank, 0.4)}% per stack, Reload Speed: (+${percent(rank, 0.6)}% after action skill use, Duration: 8 sec`,
      },
      "Transcend": {
        ranks: 3,
        text: "Amara gains increased Accuracy and Critical Hit Damage for a few seconds after activating her Action Skill.",
        effect: (rank, level) => `Accuracy: +${percent(rank, 17)}%, Critical Hit Damage: +${percent(rank, 9)}%, Duration: 12 sec`,
      },
      "Restless": {
        ranks: 5,
        text: "Amara gains increased Action Skill Cooldown Rate.",
        effect: (rank, level) => `Cooldown Rate: +${percent(rank, 5)}%`,
      },
      "Soul Sap": {
        ranks: 0,
        text: "A portion of all damage dealt by Amara's Action Skill is returned to her or a nearby ally as health.",
        effect: (rank, level) => `Life Steal: 30% of Skill damage dealt`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "3": {
      "Reverberation": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself that damages everything in its path. Deals increased damage for every enemy hit.",
        effect: (rank, level) => `Damage 116, Damage Bonus +50% per enemy hit, Cooldown 24 sec`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Ascendant": {
        ranks: 1,
        text: "All Action Skill Augments gain increased effects.",
        effect: (rank, level) => `Soul Sap Lifesteal +20%, Allure Radius +100%, Glamour Duration +50%, Bright Star Damage +25%, Stillness of Mind breaks 0.75 sec after being damaged`,
      },
      "Stillness of Mind": {
        ranks: 0,
        text: "Enemies damaged by Action Skills becomes Phaselocked until they are damaged or duration ends, but Action Skill Cooldown is increased. If an enemy is the target of Phasegrasp, nearby enemies are also Phaselocked.",
        effect: (rank, level) => `Damage -35%, Max Duration 6 sec, Cooldown +15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Deliverance": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Whenever Amara's Astral Projection damages an enemy or object, it releases homing Elemental Projectiles that trigger her Action Skill Elemental Effect on enemies.",
        effect: (rank, level) => `Cooldown: 28 seconds, Damage: ${flat(rank, level, 86)}, Elemental Projectiles: 3 per enemy hit`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "From Rest": {
        ranks: 3,
        text: "Amara gains improved Fire Rate and Charge Time.",
        effect: (rank, level) => `Fire Rate: +${percent(rank, 4)}%, Charge Time: +${percent(rank, 21)}%`,
      },
      "Laid Bare": {
        ranks: 3,
        text: "Enemies take increased damage from all sources for a few seconds after being damaged by Amara's Action Skill.",
        effect: (rank, level) => `Damage Increase: +${percent(rank, 8.3)}%, Duration: 8 sec`,
      },
      "Wrath": {
        ranks: 3,
        text: "Amara gains increased Gun Damage. This effect is increased after she activates her action skill for a few seconds.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 6.7)}%, Gun Damage: +${percent(rank, 67)}% after action skill use, Duration: 8 seconds`,
      },
    },
    "5": {
      "Remnant": {
        ranks: 3,
        text: "When Amara kills an enemy with a Gun or Action Skill, she creates a homing projectile that seeks out a new enemy dealing her Action Skill Elemental Damage. Any Overkill Damage is added to the projectile's damage.",
        effect: (rank, level) => `Remnant Damage ${flat(rank, level, 9)}`,
      },
      "Awakening": {
        ranks: 3,
        text: "Amara's Rush stacks gain increased effectiveness.",
        effect: (rank, level) => `Rush Stack Effectiveness: +${percent(rank, 10)}%`,
      },
      "Tandava": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself. When it hits a target, it explodes, damaging all nearby enemies.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 91)}, Cooldown: 35 sec`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
    },
    "6": {
      "Avatar": {
        ranks: 1,
        text: "Amara's Action Skill can be activated while it's cooling down. This skill may only be used once per completed cooldown. Additionally, if Amara's Action Skill kills an enemy, it refunds half of her Rush stacks.",
        effect: (rank, level) => `Bonus Rush Stacks: +10`,
      },
    },
  },
  "Fist of the Elements": {
    "0": {
      "Phasegrasp": {
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Enemies immune to being grasped take instant damage instead.",
        effect: (rank, level) => `Skill Duration 7 sec, Cooldown 13 sec, Grasp Immune Damage ${flat(rank, level, 40)}`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Anima": {
        ranks: 5,
        text: "Elemental Effects deal increased damage over time and increase duration. Action Skill Elemental Effects deal increased damage.",
        effect: (rank, level) => `Elemental Effect Damage +${percent(rank, 2)}%, Elemental Effect Duration +${percent(rank, 10)}%, Action Skill Elemental Effect Damage +${percent(rank, 6)}%`,
      },
      "Steady Hands": {
        ranks: 3,
        text: "Gain increased Weapon Handling and Accuracy.",
        effect: (rank, level) => `Handling +${percent(rank, 12)}%, Accuracy +${percent(rank, 10)}%`,
      },
      "Infusion": {
        ranks: 5,
        text: "Convert a portion of damage dealt by weapons into Action Skill Element.",
        effect: (rank, level) => `Converted Damage ${percent(rank, 4)}%`,
      },
    },
    "2": {
      "Tempest": {
        ranks: 5,
        text: "Deal increased Elemental Damage. Shock Damage is further increased.",
        effect: (rank, level) => `Shock Damage +${percent(rank, 8)}%, Elemental Damage +${percent(rank, 4)}%`,
      },
      "Illuminated Fist": {
        ranks: 1,
        text: "Gain increased Melee Damage, and Melee Damage is converted to Action Skill Element.",
        effect: (rank, level) => `Melee Damage +28%`,
      },
      "Wildfire": {
        ranks: 5,
        text: "Whenever Elemental Effects are applies to an enemy, increases chance to spread to a nearby enemy.",
        effect: (rank, level) => `Spread Chance ${percent(rank, 8)}%`,
      },
      "Soulfire": {
        ranks: 0,
        text: "Converts Action Skill to Fire Damage. This does not take effect until after Action Skill is used.",
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "The Eternal Fist": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts into the ground and locks targeted enemy in place. If Grasped enemy is killed, up to 3 new targets can be Grasped as well.",
        effect: (rank, level) => `Bonus Targets up to +4, Cooldown 23 sec, Grasp Immune Damage ${flat(rank, level, 66)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Dread": {
        ranks: 1,
        text: "Gun Damage is increased after an enemy is Grasped. If a Grasped Enemy is killed, current weapon is instantly reloaded.",
        effect: (rank, level) => `Weapon Damage +10%, Duration 8 sec`,
      },
      "Allure": {
        ranks: 0,
        text: "Amara's Action Skill creates singularities that pull in enemies.",
        effect: (rank, level) => `Action Skill Damage -25%, Duration 2.5 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Indiscriminate": {
        ranks: 3,
        text: "Bullets that damage enemies have a chance to ricochet and deal decreased damage to nearby enemies. Chance and Damage are increased if target is affected by Phasegrasp or Stillness of Mind.",
        effect: (rank, level) => `Ricochet Chance ${percent(rank, 10)}%, Ricochet Damage -${60 - rank * 10}%, Action Skill Ricochet Chance ${percent(rank, 20)}%, Action Skill Ricochet Damage -${30 - rank * 5}%`, // TODO check this
      },
      "Deep Well": {
        ranks: 1,
        text: "Gain increased Magazine Size with elemental weapons.",
        effect: (rank, level) => `Magazine Size +20%`,
      },
      "Catharsis": {
        ranks: 3,
        text: "When Elemental Effect is applied on an enemy that dies, enemy explodes and deals attuned element damage along with any other inflicted elements.",
        effect: (rank, level) => `Damage ${flat(rank, level, 13)}, Cooldown 8 sec`,
      },
      "Ties That Bind": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks targeted enemy in place. Enemies near Grasped target are linked, and any damage dealt to a linked target is shared between all links.",
        effect: (rank, level) => `Link Damage 35% of damage dealt, Cooldown 17 sec, Grasp Immune Damage ${flat(rank, level, 80)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
    },
    "5": {
      "Fist Over Matter": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks targeted enemy in place. After Grasping, large fists appear to smash the area, dealing damage to nearby enemies.",
        effect: (rank, level) => `Damage ${flat(rank, level, 21)}, Cooldown 31 sec, Grasp Immune Damage ${flat(rank, level, 93)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Sustainment": {
        ranks: 5,
        text: "Gain Life Steal whenever Elemental Damage is dealt with weapon.",
        effect: (rank, level) => `Life Steal +${percent(rank, 4)}%`,
      },
      "Conflux": {
        ranks: 5,
        text: "When Elemental Effect is applied on an enemy, gain chance to randomly Electrocute, Burn, or Melt that enemy.",
        effect: (rank, level) => `Extra Effect Chance ${percent(rank, 7)}%`,
      },
    },
    "6": {
      "Forceful Expression": {
        ranks: 1,
        text: "Guns deal Bonus Elemental Damage based on Action Skill Element",
        effect: (rank, level) => `Bonus Elemental Damage 11% of damage dealt`,
      },
    },
  },
};

export default skills;
