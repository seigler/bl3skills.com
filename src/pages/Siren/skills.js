import SKILLS from '@constants/skills';

/* eslint-disable quotes */
const skills = {
  "Brawl": {
    "0": {
      "Phaseslam": {
        text: "Amara leaps into the air and Slams the ground, dealing damage to all nearby enemies and knocking them up.",
        effect: rank => `Damage - 141, Cooldown: 26 Seconds`, // TODO damage scaling by level
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "One With Nature": {
        ranks: 5,
        text: "Gain Max Health and Elemental Damage Resistance to your Action Skill Element.",
        effect: rank => `Max Health +${rank * 5}%, Elemental Damage Reduction +${rank * 12}%`,
      },
      "Personal Space": {
        ranks: 3,
        text: "Shots deal Bonus Damage based on distance to target - dealing more damage when close.",
        effect: rank => `Up to ${rank * 11}% bonus damage`,
      },
      "Clarity": {
        ranks: 5,
        text: "Constantly regenerate health, increasing regeneration the lower your health is. Bonus is doubled after using an Action Skill.",
        effect: rank => `Health Regen up to +${rank * 1}% per second, Duration: 5 seconds`,
      },
    },
    "2": {
      "Arms Deal": {
        ranks: 5,
        text: "Deal increased Splash Damage, and take Reduced Splash Damage.",
        effect: rank => `Splash Damage +${rank * 3}%, Splash Damage Reduction +${rank * 3}%`,
      },
      "Root to Rise": {
        ranks: 5,
        text: "Gain increased Max Health",
        effect: rank => `Max Health +${rank * 5}%`,
      },
      "Helping Hand(s)": {
        ranks: 5,
        text: "After using Action Skill, Amara's arms remain active and grant Damage Reduction.",
        effect: rank => `Damage Reduction +${rank * 4}%, Duration 8 sec`,
      },
      "Blight Tiger (Action Skill Element)": {
        ranks: 0,
        text: "Converts Amara's Action Skill to Corrosive Damage. This does not take effect until after Amara uses her Action Skill.",
        effect: rank => ``,
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "Fracture (Action Skill)": {
        ranks: 0,
        text: "Amara summons a Handful of Fists that erupt from the ground, dealing damage in front of Amara.",
        effect: rank => `Damage 124, Cooldown 26 sec`,
        type: SKILLS.ACTION_SKILL,
      },
      "Mindfulness": {
        ranks: 3,
        text: "When taking damage, gain a Stack of Mindfulness. For every Stack, gain improved Shield Regeneration Delay and Movement Speed. Stacks decay quickly.",
        effect: rank => `Movement Speed +${rank * 1.4}%, Shield Regeneration Delay -${rank * 2.5}%, 25 Max Mindfulness Stacks, Duration 5 sec`,
      },
      "Find Your Center": {
        ranks: 1,
        text: "Gain increased Melee Damage. After using Action Skill, gain increased Melee Range.",
        effect: rank => `Melee Damage +22%, Melee Range +50%, Duration 8 sec`,
      },
      "Vigor": {
        ranks: 3,
        text: "Killing an enemy with an Action Skill grants all allies increased Movement Speed, and can be stacked.",
        effect: rank => `Team Movement Speed +${rank * 2}%, Duration 8 sec`,
      },
      "Revelation (Action Skill Augment)": {
        ranks: 0,
        text: "Amara's Action Skill now creates a Nova when it damages enemies, dealing damage to all nearby enemies.",
        effect: rank => `Nova Damage 41, Action Skill Damage -15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Downfall (Action Skill)": {
        ranks: 0,
        text: "Amara leaps into the air and shoots an Elemental Beam below her, followed by a Slam.",
        effect: rank => `Damage 141, Beam Damage 21 per sec, Cooldown 36 sec`,
        type: SKILLS.ACTION_SKILL,
      },
      "Samsara": {
        ranks: 3,
        text: "When dealing damage to an enemy with Action Skills, adds a Stack of Samsara. Every stack gains increased Gun Damage and Health Regeneration. Stacks decay quickly.",
        effect: rank => `Gun Damage +${rank * 2}% per enemy, Health Regen +${rank * 1}% of Max Health per stack, 25 Max Samsara Stacks, Duration 8 sec`,
      },
    },
    "5": {
      "Do Unto Others": {
        ranks: 1,
        text: "Upon taking damage, automatically throw an Energy Orb back at enemy, dealing Action Skill Elemental Damage.",
        effect: rank => `Projectile Damage 17, Cooldown 8 sec`,
      },
      "Jab Cross": {
        ranks: 5,
        text: "When dealing melee damage to an enemy, gain increased Action Skill Damage and increased Weapon Damage.",
        effect: rank => `Weapon Damage +${rank * 10}%, Action Skill Damage +${rank * 11}%, Duration 20 sec`,
      },
      "Guardian Angel": {
        ranks: 1,
        text: "Upon entering Fight For Your Life, gain immediate Second Wind that restores health, and creates an Action Skill Elemental Nova that knocks back enemies.",
        effect: rank => `Max Health Restored 100% of Max Health, Cooldown 60 sec`,
      },
      "Glamour (Action Skill Augment)": {
        ranks: 0,
        text: "Enemies damaged by Amara's Action Skill become confused and attack their allies, but Action Skill Cooldown is increased. If enemies are target of Phasegrasp, nearby enemies become confused.",
        effect: rank => `Damage -60%, Confuse Duration 6 sec, Cooldown +20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "6": {
      "Blitz": {
        ranks: 1,
        text: "Press in on Right Stick for Melee Override, dashing a short distance forward to perform a special melee strike dealing Elemental Melee Damage. Cooldown instantly resets if enemy is killed by Blitz.",
        effect: rank => `Cooldown 10 sec`,
      },
    },
  },
  "Mystical Assault": {
    "0": {
      "Phasecast": {
        text: "Phasecast - Amara sends forward an Astral Projection of herself, dealing damage to everything in its path.",
        effect: rank => `Damage - 133, Cooldown: 22 Seconds`, // TODO damage scaling by level
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Do Harm": {
        ranks: 5,
        text: "Grants Rush stacks after killing an enemy, which are consumed when using an Action Skill. Action Skill Damage is increased per stack of Rush consumed.",
        effect: rank => `Action Skill Damage +${rank * 0.6}% per stack, 10 Max Rush Stacks, Duration 20 sec`,
      },
      "Fast Hands": {
        ranks: 3,
        text: "Reload Speed, Weapon Swap Speed, and Mode Switch Speed are improved.",
        effect: rank => `Reload Speed +${rank * 4}%, Weapon Swap Speed +${rank * 22}%, Mode Switch Speed +${rank * 21}%`,
      },
      "Violent Tapestry": {
        ranks: 5,
        text: "Applying Elemental Effects grant Rush Stacks. For every stack of Rush consumed from an Action Skill, Elemental Effect Chance is increased.",
        effect: rank => `Effect Chance +${rank * 0.6}%, 10 Max Rush Stacks, Duration 20 sec`,
      },
    },
    "2": {
      "Alacrity": {
        ranks: 5,
        text: "Gain increased Reload Speed for every stack of Rush. For every stack of Rush consumed from an Action Skill, this bonus is increased.",
        effect: rank => `Reload Speed +${rank * 0.4}% per stack (+${rank * 0.6}% after action skill), Duration 8 sec`,
      },
      "Transcend": {
        ranks: 3,
        text: "Gain increased Accuracy and Critical Hit Bonus after activating an Action Skill.",
        effect: rank => `Accuracy +${rank * 11}%, Critical Hit Bonus +${rank * 9}%, Duration 8 sec`,
      },
      "Restless": {
        ranks: 5,
        text: "Gain increased Action Skill Cooldown Rate.",
        effect: rank => `Cooldown Rate +${rank * 4}%`,
      },
      "Soul Sap (Action Skill Augment)": {
        ranks: 0,
        text: "A portion of all damage dealt by Action Skills is returned to her or nearby allies as Health.",
        effect: rank => `Life Steal +30% of Skill damage dealt`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "3": {
      "Reverberation (Action Skill)": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself that damages everything in its path. Deals increased damage for every enemy hit.",
        effect: rank => `Damage 116, Damage Bonus +50% per enemy hit, Cooldown 24 sec`,
        type: SKILLS.ACTION_SKILL,
      },
      "Ascendant": {
        ranks: 1,
        text: "All Action Skill Augments gain increased effects.",
        effect: rank => `Soul Sap Lifesteal +20%, Allure Radius +100%, Glamour Duration +50%, Bright Star Damage +25%, Stillness of Mind breaks 0.75 sec after being damaged`,
      },
      "Stillness of Mind (Action Skill Augment)": {
        ranks: 0,
        text: "Enemies damaged by Action Skills becomes Phaselocked until they are damaged or duration ends, but Action Skill Cooldown is increased. If an enemy is the target of Phasegrasp, nearby enemies are also Phaselocked.",
        effect: rank => `Damage -35%, Max Duration 6 sec, Cooldown +15%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Deliverance (Action Skill)": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself that deals damage to everything in its path. Upon hitting enemies, it releases homing Elemental Projectiles that trigger Action Skill Elemental Effect on enemies.",
        effect: rank => `Damage 124, Elemental Projectiles 3 per enemy hit, Cooldown 24 sec`,
        type: SKILLS.ACTION_SKILL,
      },
      "From Rest": {
        ranks: 3,
        text: "Gain improved Fire Rate and Charge Time.",
        effect: rank => `Fire Rate +${rank * 4}%, Charge Time +${rank * 26}%`,
      },
      "Laid Bare": {
        ranks: 3,
        text: "Enemies take increased damage from all sources after being damaged by your Action Skill.",
        effect: rank => `Damage increase +${rank * 5}%, Duration 8 sec`,
      },
      "Wrath": {
        ranks: 3,
        text: "Gain increased Gun Damage. Effect is increased after activating Action Skill",
        effect: rank => `Gun Damage +${rank * 3}% (+${rank * 5}% after Action Skill Use), Duration 8 sec`,
      },
    },
    "5": {
      "Remnant": {
        ranks: 3,
        text: "Creates a Homing Projectile after killing an enemy with a Gun or Action Skill, and deals Action Skill Elemental Damage plus Overkill Damage.",
        effect: rank => `Remnant Damage ${rank * 33}`, // TODO level scaling?
      },
      "Awakening": {
        ranks: 3,
        text: "Rush stacks gain increased effectiveness.",
        effect: rank => `Rush Stack Effectiveness +${rank * 10}%`,
      },
      "Tandava (Action Skill)": {
        ranks: 0,
        text: "Amara sends forward an Astral Projection of herself that explodes when it hits a target, damaging all nearby enemies.",
        effect: rank => `Damage: 166, Cooldown 28 sec`,
        type: SKILLS.ACTION_SKILL,
      },
    },
    "6": {
      "Avatar": {
        ranks: 1,
        text: "Action Skills can be activated while cooling down. Can only be used once per completed cooldown. Increases Max Rush Stacks",
        effect: rank => `Bonus Rush Stacks +10`,
      },
    },
  },
  "Fist of the Elements": {
    "0": {
      "Phasegrasp": {
        text: "Amara summons a giant fist that bursts from the ground and locks the targeted enemy in place for a few seconds. Enemies immune to being grasped take instant damage instead.",
        effect: rank => `Skill Duration - 7 sec, Cooldown - 13 sec, Grasp Immune Damage - 40`, // TODO damage scaling by level
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Anima": {
        ranks: 5,
        text: "Elemental Effects deal increased damage over time and increase duration. Action Skill Elemental Effects deal increased damage.",
        effect: rank => `Elemental Effect Damage +${rank * 2}%, Elemental Effect Duration +${rank * 10}%, Action Skill Elemental Effect Damage +${rank * 6}%`,
      },
      "Steady Hands": {
        ranks: 3,
        text: "Gain increased Weapon Handling and Accuracy.",
        effect: rank => `Handling +${rank * 12}%, Accuracy +${rank * 10}%`,
      },
      "Infusion": {
        ranks: 5,
        text: "Convert a portion of damage dealt by weapons into Action Skill Element.",
        effect: rank => `Converted Damage ${rank * 4}%`,
      },
    },
    "2": {
      "Tempest": {
        ranks: 5,
        text: "Deal increased Elemental Damage. Shock Damage is further increased.",
        effect: rank => `Shock Damage +${rank * 8}%, Elemental Damage +${rank * 4}%`,
      },
      "Illuminated Fist": {
        ranks: 1,
        text: "Gain increased Melee Damage, and Melee Damage is converted to Action Skill Element.",
        effect: rank => `Melee Damage +28%`,
      },
      "Wildfire": {
        ranks: 5,
        text: "Whenever Elemental Effects are applies to an enemy, increases chance to spread to a nearby enemy.",
        effect: rank => `Spread Chance ${rank * 8}%`,
      },
      "Soulfire (Action Skill Element)": {
        ranks: 0,
        text: "Converts Action Skill to Fire Damage. This does not take effect until after Action Skill is used.",
        type: SKILLS.AUGMENT_DIAMOND,
      },
    },
    "3": {
      "The Eternal Fist (Action Skill)": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts into the ground and locks targeted enemy in place. If Grasped enemy is killed, up to 3 new targets can be Grasped as well.",
        effect: rank => `Bonus Targets up to +4, Cooldown 23 sec, Grasp Immune Damage 66`,
        type: SKILLS.ACTION_SKILL,
      },
      "Dread": {
        ranks: 1,
        text: "Gun Damage is increased after an enemy is Grasped. If a Grasped Enemy is killed, current weapon is instantly reloaded.",
        effect: rank => `Weapon Damage +10%, Duration 8 sec`,
      },
      "Allure (Action Skill Augment)": {
        ranks: 0,
        text: "Amara's Action Skill creates singularities that pull in enemies.",
        effect: rank => `Action Skill Damage -25%, Duration 2.5 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Indiscriminate": {
        ranks: 3,
        text: "Bullets that damage enemies have a chance to ricochet and deal decreased damage to nearby enemies. Chance and Damage are increased if target is affected by Phasegrasp or Stillness of Mind.",
        effect: rank => `Ricochet Chance ${rank * 10}%, Ricochet Damage -${60 - rank * 10}%, Action Skill Ricochet Chance ${rank * 20}%, Action Skill Ricochet Damage -${30 - rank * 5}%`, // TODO check this
      },
      "Deep Well": {
        ranks: 1,
        text: "Gain increased Magazine Size with elemental weapons.",
        effect: rank => `Magazine Size +20%`,
      },
      "Catharsis": {
        ranks: 3,
        text: "When Elemental Effect is applied on an enemy that dies, enemy explodes an deals attuned element damage along with any other inflicted elements.",
        effect: rank => `Damage ${rank * 13}, Cooldown 8 sec`, // TODO level scaling
      },
      "Ties That Bind (Action Skill)": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks targeted enemy in place. Enemies near Grasped target are linked, and any damage dealt to a linked target is shared between all links.",
        effect: rank => `Link Damage 35% of damage dealt, Cooldown 17 sec, Grasp Immune Damage 80`,
        type: SKILLS.ACTION_SKILL,
      },
    },
    "5": {
      "Fist Over Matter (Action Skill)": {
        ranks: 0,
        text: "Amara summons a giant fist that bursts from the ground and locks targeted enemy in place. After Grasping, large fists appear to smash the area, dealing damage to nearby enemies.",
        effect: rank => `Damage 21, Cooldown 31 sec, Grasp Immune Damage 93`,
        type: SKILLS.ACTION_SKILL,
      },
      "Sustainment": {
        ranks: 5,
        text: "Gain Life Steal whenever Elemental Damage is dealt with weapon.",
        effect: rank => `Life Steal +${rank * 4}%`,
      },
      "Conflux": {
        ranks: 5,
        text: "When Elemental Effect is applied on an enemy, gain chance to randomly Electrocute, Burn, or Melt that enemy.",
        effect: rank => `Extra Effect Chance ${rank * 7}%`,
      },
    },
    "6": {
      "Forceful Expression": {
        ranks: 1,
        text: "Guns deal Bonus Elemental Damage based on Action Skill Element",
        effect: rank => `Bonus Elemental Damage 11% of damage dealt`,
      },
    },
  },
};

export default skills;
