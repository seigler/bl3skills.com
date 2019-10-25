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
        effect: (rank, level) => `Converts to Corrossive Damage`,
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
      "Deliverance": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Whenever Amara's Astral Projection damages an enemy or object, it releases homing Elemental Projectiles that trigger her Action Skill Elemental Effect on enemies.",
        effect: (rank, level) => `Cooldown: 28 seconds, Damage: ${flat(rank, level, 86)}, Elemental Projectiles: 3 per enemy hit`,
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
      "Reverberation": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself, dealing damage to everything in its path. Astra Projection deals increased damage for every enemy it hits.",
        effect: (rank, level) => `Cooldown: 30 seconds, Damage Bonus: +50% per enemy hit, Damage: ${flat(rank, level, 88)}`,
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
        effect: (rank, level) => `Cooldown: 35 seconds, Damage: ${flat(rank, level, 91)},`,
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
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Some enemies are immune to being Grasped and instantly take damage instead.",
        effect: (rank, level) => `Skill Duration: 7 sec, Cooldown: 16 seconds, Grasp Immune Damage: ${flat(rank, level, 28)}`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Anima": {
        ranks: 5,
        text: "Amara's Status Effects deal increased damage over time and have increased duration. Her Action Skill Status Effect deals further increased damage.",
        effect: (rank, level) => `Action Skill Status Effect Damage: +${percent(rank, 8)}%, Satus Effect Damage: +${percent(rank, 4)}%, Status Effect Duration: +${percent(rank, 20)}%`,
      },
      "Steady Hands": {
        ranks: 3,
        text: "Amara gains increased Weapon Handling and Accuracy.",
        effect: (rank, level) => `Handling: +${percent(rank, 14)}%, Accuracy: +${percent(rank, 13)}%`,
      },
      "Infusion": {
        ranks: 5,
        text: "Convert a portion of damage dealt by Amara's weapons into Action Skill Element.",
        effect: (rank, level) => `Converted Damage: ${percent(rank, 8)}%`,
      },
    },
    "2": {
      "Tempest": {
        ranks: 5,
        text: "Amara deals increased Elemental Damage. Shock Damage is further increased.",
        effect: (rank, level) => `Shock Damage: +${percent(rank, 4)}%, Elemental Damage +${percent(rank, 6)}%`,
      },
      "Illuminated Fist": {
        ranks: 1,
        text: "Amara gains increased Melee Damage and her Melee Damage is converted to Action Skill Element.",
        effect: (rank, level) => `Melee Damage: +75%`,
      },
      "Wildfire": {
        ranks: 5,
        text: "Whenever Amara applies a Status Effect to an enemy, it has a chance to spread to a nearby enemy.",
        effect: (rank, level) => `Spread Chance: ${percent(rank, 8)}%`,
      },
      "Soulfire": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Incendiary Damage.",
        effect: (rank, level) => `Converts to Incendiary Damage`,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "The Eternal Fist": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts into the ground and locks targeted enemy in place. Whenvever the Grasped enemy is killed, a new fist seeks out and Grasps a new target.",
        effect: (rank, level) => `Bonus Targets: Up to +4, Cooldown: 20 sec, Grasp Immune Damage: ${flat(rank, level, 28)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Dread": {
        ranks: 1,
        text: "Amara's Gun Damage is increased for a few seconds after an enemy is Grasped. Whenever any player kills a Grasped Enemy, their current weapon is instantly reloaded.",
        effect: (rank, level) => `Gun Damage +15%, Duration: 8 seconds`,
      },
      "Allure": {
        ranks: 0,
        text: "Amara's Action Skill creates a singularity that pull in enemies.",
        effect: (rank, level) => `Action Skill Damage: -20%, Duration: 2.5 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Indiscriminate": {
        ranks: 3,
        text: "Amara's bullets that damage enemies have a chance to ricochet and deal decreased damage to other nearby enemies. Richochet Chance and Damage are increased if target is affected by Phasegrasp or Stillness of Mind.",
        effect: (rank, level) => `Ricochet Chance: ${percent(rank, 10)}%, Ricochet Damage: -${50 - rank * 10}%, Action Skill Ricochet Chance: ${percent(rank, 20)}%, Action Skill Ricochet Damage: -${25 - rank * 5}%`, // TODO check this
      },
      "Deep Well": {
        ranks: 1,
        text: "Amara gains increased Magazine Size with elemental weapons.",
        effect: (rank, level) => `Magazine Size: +20%`,
      },
      "Catharsis": {
        ranks: 3,
        text: "Whenever Amara riggers an elemental effect on an enemy, when that enemy that dies the enemy explodes, dealing her attuned element damage along with any other element that is currently inflicted upon that enemy. This skill has a short cooldown.",
        effect: (rank, level) => `Damage: ${flat(rank, level, 4)}, Cooldown: 8 seconds`,
      },
      "Ties That Bind": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Enemies near the Grasped target are linked, and any damage dealt to a linked target is shared between all other linked targets.",
        effect: (rank, level) => `Link Damage: 35% of damage dealt, Cooldown: 18 sec, Grasp Immune Damage: ${flat(rank, level, 34)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
    },
    "5": {
      "Fist Over Matter": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place. After Grasping, large fists appear and constantly smash the area, dealing damage to nearby enemies.",
        effect: (rank, level) => `Cooldown 28 seconds, Damage ${flat(rank, level, 35)}, Grasp Immune Damage ${flat(rank, level, 39)}`,
        type: SKILLS.AUGMENT_ACTION_SKILL,
      },
      "Sustainment": {
        ranks: 5,
        text: "Amara gains Life Steal whenever she deals Elemental Damage with her weapon.",
        effect: (rank, level) => `Life Steal: +${percent(rank, 4)}% of damage dealt`,
      },
      "Conflux": {
        ranks: 5,
        text: "Whenever Amara applies a Status Effect to an enemy, she gains a chance to randomly Electrocute, Ignite, or Melt that enemy.",
        effect: (rank, level) => `Extra Effect Chance: ${percent(rank, 7)}%`,
      },
    },
    "6": {
      "Forceful Expression": {
        ranks: 1,
        text: "Amara's guns deal Bonus Elemental Damage, based on her Action Skill Element.",
        effect: (rank, level) => `Bonus Elemental Damage: 18% of Damage Dealt`,
      },
    },
  },
};

export default skills;
