import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}

function percentTwoDecimals (rank, unit) {
  return Math.round(rank * unit * 100) / 100;
}

// Matched Set Heat Per Shot
function getMatchedSetHeatPerShot(rank) {
  switch (rank) {
    case 1:
      return 2;
    case 2:
      return 4;
    case 3:
      return 6;
    case 4:
      return 9;
    case 5:
      return 11;
    default:
      return 0;
  }
}

// Scrappy Handling
function getScrappyHandling(rank) {
  switch (rank) {
    case 1:
      return 10.7;
    case 2:
      return 19.4;
    case 3:
      return 26.5;
    case 4:
      return 32.4;
    case 5:
      return 37.5;
    default:
      return 0;
  }
}

// Scrappy Weapon Swap Speed
function getScrappyWeaponSwapSpeed(rank) {
  switch (rank) {
    case 1:
      return 16;
    case 2:
      return 27.5;
    case 3:
      return 36.3;
    case 4:
      return 43.2;
    case 5:
      return 48.7;
    default:
      return 0;
  }
}

// Scrappy Mode Switch Speed
function getScrappyModeSwitchSpeed(rank) {
  switch (rank) {
    case 1:
      return 16;
    case 2:
      return 27.5;
    case 3:
      return 36.3;
    case 4:
      return 43.2;
    case 5:
      return 48.7;
    default:
      return 0;
  }
}

// Armored Infantry Damage Resistance
function getArmoredInfantryDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
      return 8;
    case 4:
      return 11;
    case 5:
      return 13;
    default:
      return 0;
  }
}

// Vladof Ingenuity Shock Damage Resistance
function getVladofIngenuityShockDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 15;
    case 2:
      return 26;
    case 3:
      return 35;
    case 4:
      return 42;
    case 5:
      return 47;
    default:
      return 0;
  }
}

// Behind the Iron Curtain Shield Recharge Delay
function getBehindTheIronCurtainShieldRechargeDelay(rank) {
  switch (rank) {
    case 1:
      return 12;
    case 2:
      return 21;
    case 3:
      return 28;
    default:
      return 0;
  }
}

// Deadlines Fuel Drain Modifier
function getDeadlinesFuelDrain(rank) {
  switch (rank) {
    case 1:
      return 11;
    case 2:
      return 22;
    case 3:
      return 30;
    default:
      return 0;
  }
}

/* eslint-disable quotes */
const skills = {
  "Bottomless Mags": {
    "0": {
      "Minigun": {
        text: "The Minigun is capable of sustained rapid fire. Firing for long periods causes the Minigun to overheat, rendering it inoperable for a few seconds. Element: Non-Elemental.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `Put a little lead in the air and see what falls over.`,
      },
    },
    "1": {
      "Cloud of Lead": {
        text: "Occasionally, Moze's and Iron Bear's shots will deal additional Incendiary Damage and won't consume ammo.",
        ranks: 5,
        effect: (rank, level) => `Effects are triggered every ${9 - rank} shots\nBonus Incendiary Damage: +${percentTwoDecimals(rank, 2.25)}%`,
      },
      "Dakka Bear": {
        text: "Adds a manned turret to the back of Iron Bear. While manned, Iron Bear and its rider gain increased damage.",
        ranks: 1,
        effect: (rank, level) => `Iron Bear Damage: +50%\nIron Cub Damage: +20%`,
      },
      "Matched Set": {
        text: "Moze's currently equipped weapon gains a stacking bonus to Magazine Size and Decreased Heat Per Shot for every piece of equipped gear that has a matching manufacturer.",
        ranks: 5,
        effect: (rank, level) => `Magazine Size: +${percent(rank, 2)}% per matched gear\nHeat Per Shot: -${getMatchedSetHeatPerShot(rank)}% per matched gear`,
      },
    },
    "2": {
      "Let Off Some Steam": {
        text: "Minigun deals more damage as heat increases, and can be fired for longer before overheating.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Minigun Damage: Up to +80%\nMinigun Heat Capacity: +35%`,
      },
      "Stoke the Embers": {
        text: "Increases Moze and Iron Bear's Incendiary Damage.",
        ranks: 3,
        effect: (rank, level) => `Incendiary Damage: +${percent(rank, 10)}%`,
      },
      "Redistribution": {
        text: "After Moze scores a Critical Hit, she regenerates ammo and health for a few seconds.The lower her health, the more powerful the regeneration.",
        ranks: 1,
        effect: (rank, level) => `Ammo Regeneration: +5% of Magazine Size/sec\nHealth Regen: Up to +2.5% of Missing Health/sec\nDuration: 3 seconds`,
      },
      "Scrappy": {
        text: "While moving, Moze's Weapon Damage, Handling, Weapon Swap, and Mode Switch Speed are increased.",
        ranks: 5,
        effect: (rank, level) => `Weapon Damage: +${percent(rank, 6)}%\nHandling: +${getScrappyHandling(rank)}%\nWeapon Swap Speed: +${getScrappyWeaponSwapSpeed(rank)}%\nMode Switch Speed: +${getScrappyModeSwitchSpeed(rank)}%`,
      },
      "Salamander": {
        text: "The Salamander is a flamethrower that deals Incendiary Damage to enemies at close range. Though the Salamander has infinite ammo, it drains Fuel with use.",
        type: SKILLS.AUGMENT_ACTION_SKILL,
        effect: (rank, level) => `Fire... for effect.`,
      },
    },
    "3": {
      "General Winter": {
        text: "Minigun fires Cryo rounds which reduce Heat Gain and Fuel Drain.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Minigun Fuel Drain: -40%\nCryo Efficiency: +20%\nMinigun Element: Cryo`,
      },
      "Rushin' Offensive": {
        text: "Moze can sprint and shoot at the same time. While sprinting, Moze's weapons gain Life Steal.",
        ranks: 1,
        effect: (rank, level) => `Life Steal: 8% of damage dealt`,
      },
      "Scorching RPM's": {
        text: "Moze gains increased Fire Rate and Critical Hit Damage. Iron Bear gains increased Hard Point damage.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate: +${percent(rank, 3)}%\nCritical Hit Damage: +${percent(rank, 4)}%\nIron Bear Damage: +${percent(rank, 5)}%`,
      },
      "Fuel Economy": {
        text: "Reduces Salamander's Fuel Drain. Additionally, Iron Bear's Movement Speed is increased after damaging an enemy with Salamander.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Salamander Fuel Drain: -25%\nIron Bear Movement Speed: +50%\nMovement Speed Duration: 3 seconds`,
      },
    },
    "4": {
      "Exploding. Bullets.": {
        text: "Minigun fires Explosive Rounds that deal increased Splash Damage, but its Fire Rate is decreased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Minigun Damage: +232%\nMinigun Fire Rate: -75%`,
      },
      "The Iron Bank": {
        text: "Increases Moze's Magazine Size.",
        ranks: 5,
        effect: (rank, level) => `Magazine Size: +${percent(rank, 7)}%`,
      },
      "Specialist Bear": {
        text: "Equipping two of the same Weapons on Iron Bear increases the damage they deal.",
        ranks: 1,
        effect: (rank, level) => `Iron Bear Damage: +${percent(rank, 60)}%`,
      },
      "Chemical Warfare": {
        text: "Salamander now deals Corrosive Damage. Additionally, Salamander's Melt Damage is increased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Salamander Element: Corrosive\nSalamander Melt Damage: +125%`,
      },
    },
    "5": {
      "Some for the Road": {
        text: "Moze gains infinite ammo for a few seconds after exiting Iron Bear.",
        ranks: 1,
        effect: (rank, level) => `Duration: 5 seconds`,
      },
      "Click, Click...": {
        text: "Moze gains increased Gun Damage as her magazine empties. The less ammo there is remaining, the greater the increase. If Moze has a COV gun equipped, she gains Gun Damage as her gun's heat increases.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: Up to +${percent(rank, 20)}%`,
      },
      "Molten Roar": {
        text: "The Salamander burst-fires 3 projectiles with increased Damage, the first of which leaves a large Incendiary area.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Damage: +100%`,
      },
    },
    "6": {
      "Forge": {
        text: "Moze constantly regenerates ammo for her currently equipped weapon.",
        ranks: 1,
        effect: (rank, level) => `Ammo Regeneration: +5% of Magazine Size/sec`,
      },
    },
  },
  "Demolition Woman": {
    "0": {
      "V-35 Grenade Launcher": {
        text: "The V-35 is a semi-automatic grenade launcher. Its grenades are not affected by Moze's equipped grenade mod. Element: Non-Elemental.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `For when the V-34 just isn't enough`,
      },
    },
    "1": {
      "Fire in the Skag Den": {
        text: "Whenever Moze and Iron Bear deal Splash Damage, they deal bonus Incendiary Damage.",
        ranks: 5,
        effect: (rank, level) => `Bonus Incendiary Damage: +${percent(rank, 3)}% of damage dealt`,
      },
      "Deadlines": {
        text: "Firing Iron Bear Weapons drains less Fuel. Killing an enemy while Iron Bear is active increases Fuel. This skill has diminishing returns.",
        ranks: 3,
        effect: (rank, level) => `Fuel Returned: Up to ${percent(rank, 2)}%\nFuel Drain: -${getDeadlinesFuelDrain(rank)}%`,
      },
      "Grizzled": {
        text: "Kill Skill. Killing an enemy reduces Moze's remaining Action Skill Cooldown Time. This skill has diminishing returns.",
        ranks: 5,
        effect: (rank, level) => `Iron Bear Cooldown: -${rank * 1} seconds`,
      },
    },
    "2": {
      "Shaped Charge": {
        text: "Direct hits with the V-35 deal increased damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `V-35 Direct Hit Damage: +35%`,
      },
      "Means of Destruction": {
        text: "Whenever Moze deals Splash Damage, there is a chance to add ammo to her currently equipped weapon's magazine, with a smaller chance to return a grenade.",
        ranks: 3,
        effect: (rank, level) => `Ammo Chance: +${percent(rank, 3.333)}%\nGrenade Chance: +${percent(rank, 2)}%\nCooldown: 0.3 seconds`,
      },
      "Torgue Cross-Promotion": {
        text: "All Splash Damage dealt by Moze has a chance to double in size. Additionally, Moze and Iron Bear deal increased Splash Damage.",
        ranks: 5,
        effect: (rank, level) => `Splash Damage: +${percent(rank, 6)}%\nChance to Double Splash Radius: +${percent(rank, 3)}%`,
      },
      "Stainless Steel Bear": {
        text: "Iron Bear gains additional armor, increased Maximum Fuel, and increased Damage.",
        ranks: 5,
        effect: (rank, level) => `Maximum Fuel: +${percent(rank, 4)}%\nIron Bear Armor: +${percent(rank, 6)}%\nIron Bear Damage: +${percent(rank, 4)}%`,
      },
      "Vanquisher Rocket Pod": {
        text: "The Vanquisher Rocket Pod is a rocket launcher capable of rapid-firing volleys of unguided explosive rockets. Element: Non-Elemental.",
        type: SKILLS.AUGMENT_ACTION_SKILL,
        effect: (rank, level) => `If you want guidance, get a sherpa. If you want explosions, get a Vladof.`,
      },
    },
    "3": {
      "Musical Chairs": {
        text: "Occasionally, the V-35 fires a Singularity Grenade that pulls in nearby enemies before exploding.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `V-35 Singularity: Every 7th grenade`,
      },
      "Pull the Holy Pin": {
        text: "Moze's grenades have a chance to score a Critical Hit, dealing greatly increased damage. Sources of Critical Hit Damage do not affect grenade Critical Hits.",
        ranks: 3,
        effect: (rank, level) => `Grenade Critical Hit Chance: +${percent(rank, 10)}%`,
      },
      "Auto Bear": {
        text: "After Moze exits Iron Bear, it will remain deployed in place for a short time. While Auto Bear remains active, it will target and attack nearby enemies until its duration ends, then it will charge at an enemy and self-destruct.",
        ranks: 1,
        effect: (rank, level) => `Auto Bear Duration: 15 seconds`,
      },
      "Active Tracking": {
        text: "The Vanquisher Rocket Pod now fires homing rockets and has increased Reload Speed. Hold down [Action Skill key] and aim at enemies to designate up to 6 targets. Releasing Fire Button launches a volley of homing rockets at the designated targets.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Vanquisher Reload Speed: +25%`,
      },
    },
    "4": {
      "Lock and Speedload": {
        text: "The V-35's Reload Speed is greatly increased and it now fires a 5-round burst.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `V-35 Reload Speed: +25%`,
      },
      "Vampyr": {
        text: "Whenever Moze damages an enemy with a thrown grenade, for every enemy hit, she restores a portion of her missing health. Iron Bear restores armor for every enemy it deals Splash Damage to.",
        ranks: 5,
        effect: (rank, level) => `Moze Health Restored: ${percent(rank, 4)}% of Missing Health per enemy hit\nIron Bear Health Restored: ${percent(rank, 2)}% of Missing Armor per enemy hit`,
      },
      "Why Can't I Carry All These Grenades": {
        text: "Increases Moze's grenade carrying capacity.",
        ranks: 3,
        effect: (rank, level) => `Grenade Capacity: +${rank}`,
      },
      "Target Softening": {
        text: "The Vanquisher Rocket Pod deals greatly reduced damage per rocket, but fires in a 6-rocket spread. Additionally, enemies hit by Vanquisher Rocket Pod rockets take increased damage from all sources.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Vanquisher Damage: -74%\nEnemy Damage Taken: +15%`,
      },
    },
    "5": {
      "To the Last": {
        text: "Moze gains the ability to throw grenades while in Fight For Your Life. If she threw a grenade before gaining a Second Wind, a grenade is refunded.",
        ranks: 1,
        effect: (rank, level) => `The greatest enemy is one with nothing to lose... and a grenade.`,
      },
      "Explosive Punctuation": {
        text: "When Moze deals Splash Damage, her Action Skill Cooldown Rate is briefly increased.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Cooldown Rate: +${percent(rank, 8)}%`,
      },
      "Hammerdown Protocol": {
        text: "Instead of a volley of conventional rockets, the Vanquisher Rocket Pod launches a single rocket with a nuclear warhead, dealing massive Radiation Damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Vanquisher Damage: +600%\nVanquisher Magazine Size: 1\nVanquisher Element: Raditation\n`,
      },
    },
    "6": {
      "Short Fuse": {
        text: "Whenever Moze deals Gun Damage, there is a chance of a secondary explosion centered on the target.",
        ranks: 1,
        effect: (rank, level) => `Secondary Explosion Chance: 20%\nSecondary Explosion Damage: 75% of Gun Damage`,
      },
    },
  },
  "Shield of Retribution": {
    "0": {
      "Railgun": {
        text: "The Railgun fires electrified high-velocity projectiles that deal Shock Damage.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `It's like a bullet, only bigger. And faster. And wrapped in lightning.`,
      },
    },
    "1": {
      "Selfless Vengeance": {
        text: "Whenever Moze reloads, she loses a small portion of her health and grants additional Incendiary Damage to her and her allies' rounds for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Bonus Incendiary Damage: +${percent(rank, 3)}% of gun damage dealt\nCurrent Health Removed: ${percent(rank, 1)}\nDuration: ${rank + 5} seconds`,
      },
      "Security Bear": {
        text: "Iron Bear gains a bubble shield that reduces damage taken. The shield deactivates if it sustains too much damage, reactivating after a short cooldown.\nIf Iron Cub is equipped, it gains Damage Reduction instead.",
        ranks: 1,
        effect: (rank, level) => `Bubble Recharge Delay: 5 seconds\n50% of Iron Bear Maximum Armor added as Shields\nIron Cub Damage Reduction: +50%`,
      },
      "Armored Infantry": {
        text: "While Moze's shields are active, she gains Damage Resistance and increased Gun Damage.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}%\nDamage Resistance: +${getArmoredInfantryDamageResistance(rank)}%`,
      },
    },
    "2": {
      "Hell on Rails": {
        text: "Railgun now fires superheated rounds that deal Incendiary Damge, but have increased Fuel Drain per shot.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Railgun Fuel Drain: +8%\nRailgun Element: Incendiary`,
      },
      "Drowning in Brass": {
        text: "Kill Skill. Killing an enemy grants Moze a stack of Drowning in Brass.\n\nFor each stack of Drowning in Brass, Moze's Fire Rate is reduced, but Gun Damage is increased for both her and her allies.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)}% per stack\nMoze Fire Rate: -${percent(rank, 0.5)}% per stack\nMaximum Stacks: 3\nDuration: 15 seconds`,
      },
      "Thin Red Line": {
        text: "A portion of Moze's health is Reserved and cannot be restored, but her Maximum Shield is increased by the same amount.",
        ranks: 3,
        effect: (rank, level) => `${percent(rank, 20)}% Max Health Reserved and Added to Max Shield`,
      },
      "Vladof Ingenuity": {
        text: "Moze's Maximum Shield and Shield Recharge Rate are increased, and she gains resistance to Shock Damage.",
        ranks: 5,
        effect: (rank, level) => `Shield Recharge Rate: +${percent(rank, 4)}%Maximum Shield: +${percent(rank, 6)}%\n\nShock Damage Resistance: +${getVladofIngenuityShockDamageResistance(rank)}%`,
      },
      "Bear Fist": {
        text: "The Bear Fist is a pneumatic-driven fist that deals massive damage to a single target at close range. Element: Non-Elemental.",
        type: SKILLS.AUGMENT_ACTION_SKILL,
        effect: (rank, level) => `Vladof supports the right to bear armored bear arms.`,
      },
    },
    "3": {
      "Capacitive Armature": {
        text: "When Railgun hits an enemy, it chains to nearby enemies, dealing reduced Shock Damage to more targets.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Splinter Damage: -30%`,
      },
      "Full Can of Whoop-Ass": {
        text: "Entering Iron Bear causes Moze's and her allies' shields to immediately begin recharging at an increased Shield Recharge Rate.",
        ranks: 1,
        effect: (rank, level) => `Shield Recharge Rate: +25%`,
      },
      "Experimental Munitions": {
        text: "Whenever Moze and Iron Bear score a Critical Hit, they deal bonus Incendiary Damage.",
        ranks: 1,
        effect: (rank, level) => `Bonus Incendiary Damage: +${percent(rank, 15)}% of damage dealt`,
      },
      "Wild Swing": {
        text: "Whenever Bear Fist hits an enemy, it deals random Bonus Elemental Damage to that enemy and all enemies nearby.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Bear Fist Bonus Elemental Damage: +35% of damage dealt`,
      },
    },
    "4": {
      "Corrosive Sabot Round": {
        text: "Railgun now fires a specialty round that deals reduced damage and explodes after a short delay.\nRailgun shots have reduced Fuel Drain and the Magazine Size is increased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Railgun Fuel Drain: -50%\nRailgun Damage: -15%\nRailgun Magazine Size: +2\nRailgun Element:Corrosive`,
      },
      "Behind the Iron Curtain": {
        text: "Moze's Shield Recharge Delay is reduced, and her Shield Recharge Rate is increased.",
        ranks: 3,
        effect: (rank, level) => `Shield Recharge Rate: +${percent(rank, 11)}%\nShield Recharge Delay: -${getBehindTheIronCurtainShieldRechargeDelay(rank)}%`,
      },
      "Desperate Measures": {
        text: "Moze's Gun Damage and Iron Bear's Damage is increased depending on how low their health is. The lower their health, the greater the increase.",
        ranks: 3,
        effect: (rank, level) => `Damage: Up to +${Math.round(percent(rank, 16.5))}%`,
      },
      "Close the Distance": {
        text: "Instead of punching, Iron Bear now launches its Bear Fist forward and grabs enemies at greatly increased range, dealing Shock Damage and pulling them back to Iron Bear.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Step into my office.`,
      },
    },
    "5": {
      "Phalanx Doctrine": {
        text: "Kill Skill. After killing an enemy, Moze gains a stack of Phalanx Doctrine. For every stack of Phalanx Doctrine, Moze's Maximum Shield and Gun Damage are increased. Each stack lasts 30 seconds.\n\nThere is no stack limit.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 2)}% per stack\nMax Shields: +${percent(rank, 3)}% per stack\nDuration: 30 seconds`,
      },
      "Force Feedback": {
        text: "Whenever Moze scores a Critical Kill, her shields immediately begin recharging and she instantly regains a portion of her shield.",
        ranks: 1,
        effect: (rank, level) => `Shields Restored: 10% of Maximum Shield`,
      },
      "Shockhammer": {
        text: "Bear Fist is now capable of sustained rapid fire punching. Additionally, Bear Fist has reduced Fuel Drain and deals Bonus Shock Damage with each hit.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Bonus Shock Damage: +60% of damage dealt\nFuel Drain: -40%`,
      },
    },
    "6": {
      "Tenacious Defense": {
        text: "Whenever Moze's shield is fully depleted, she instantly restores a portion of her shield, and her Gun Damage is increased for a short time. This skill can only trigger after Moze's shields have fully recharged.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage: +30%\nShields Restored: 40% of Maximum Shield\nDuration: 30 seconds`,
      },
    },
  },
  "Bear Mother": {
    "0": {
      "Iron Cub": {
        ranks: 0,
        text: "Moze Summons Iron Cub in place of Iron Bear. Iron Cub equips two of whatever weapon is equipped in the remaining Action Skill slot. While deployed, Iron Cub follows Moze and will target and attack enemies for the duration.\nSkills that affect Iron Bear affect Iron Cub. Iron Cub still uses Fuel, but usses less of it and deals less damage (because it's smaller).", 
        effect: (rank, level) => ``
      },
    },
    "1": {
      "Biofuel": {
        ranks: 5,
        text: "Whenever Moze or Iron Bear ignites an enemy, they both regenerate health for a short time.", 
        effect: (rank, level) => `Health Regen: Up to +${percent(rank, 0.7)}% per sec\nIron Bear Armor Regen: Up to +${percent(rank, 0.5)}% per sec\nDuration: 8 seconds`
      },
      "Big Surplus": {
        ranks: 3,
        text: "While Moze's Action Skill is cooling down, she deals bonus Incendiary Damage.", 
        effect: (rank, level) => `Bonus Damage: ${percent(rank, 5)}% of Gun Damage`
      },
      "Really Big Guns": {
        ranks: 5,
        text: "Iron Bear gains increased Damage.", 
        effect: (rank, level) => `Iron Bear Damage: +${percent(rank, 4)}%`
      },   
    },
    "2": {
      "Double Time": {
        ranks: 3,
        text: "While Moze's Action Skill is active, she and Iron Bear gain increased Movement Speed.", 
        effect: (rank, level) => `Movement Speed: +${percent(rank, 12)}%`
      },
      "Harmonious Havoc": {
        ranks: 5,
        text: "Moze gains increased Gun Damage for each weapon, shield, and grenade that matches the element of her gun.", 
        effect: (rank, level) => `Gun Damage: +${percent(rank, 2)}% per matching item`
      },
      "Explosive Fury": {
        ranks: 3,
        text: "Moze and Iron Bear gain increased Status Effect Damage and Status Effect Chance.", 
        effect: (rank, level) => `Status Effect Chance: +${percent(rank, 9)}%\nStatus Effect Damage: +${percent(rank, 5)}%`
      },
      "Fuel For The Fire": {
        ranks: 0,
        text: "Whenever Moze or Iron Cub inflicts a Status Effect on an enemy, Iron Cub's armor is restored.", 
        effect: (rank, level) => `12% of Max Armor`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "3": {
      "Baby Nukes": {
        ranks: 0,
        text: "Whenever Iron Cub is deployed or destroyed, it triggers a nuclear explosion, dealing massive Radation Damage.", 
        effect: (rank, level) => `Damage: 123 (scales with level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Fired Up": {
        ranks: 1,
        text: "Whenever Moze or Iron Bear applies a Status Effect to an enemy, she gains increased Fire Rate for a short time. This effect stacks.", 
        effect: (rank, level) => `Fire Rate: +5%\nDuration: 12 seconds\nMax Stacks: 5`,
      },  
    },
    "4": {
      "Nitrotrinadium Engines": {
        ranks: 5,
        text: "Iron Bear gains increased Maximum Fuel and Action Skill Cooldown Rate.", 
        effect: (rank, level) => `Maximum Fuel: +${percent(rank, 5)}%\nAction Skill Cooldown Rate: +${percent(rank, 4)}%`
      },
      "Never Going To Give You Up": {
        ranks: 5,
        text: "Whenever Moze or Iron Bear applies a Status Effect to an enemy, Iron Bear gains Fuel. This skill had diminishing returns.", 
        effect: (rank, level) => `Fuel Returned: Up to 15%`
      },
      "My Little Friend": {
        ranks: 0,
        text: "Iron Cub spawns with Incendiary Vladof Assault Riffle in addition to Iron Cub's other weapons.", 
        effect: (rank, level) => ``,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Efficiency Engine": {
        ranks: 0,
        text: "Moze gains increased Gun Damage. The longer Iron Cub has been active, the greater the bonus.", 
        effect: (rank, level) => `Gun Damage: +${percent(rank, 0.5)}% per second`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
        "Feature Creep": {
        ranks: 1,
        text: "Iron Bear gains increased Damage and Damage Resistance.", 
        effect: (rank, level) => `Iron Bear Damage: +18%\nIron Bear Damage Resistance: +45%`
      },
      "Limit Break": {
        ranks: 3,
        text: "Moze gains increased Action Skill Cooldown Rate whenever she or Iron Bear inflicts a Status Effect on an enemy. This effect stacks.", 
        effect: (rank, level) => `Cooldown Rate: +${percent(rank, 4)}%\nDuration: 12 seconds\nMax Stacks: 10`
      },
      "Superior Firepower": {
        ranks: 1,
        text: "Whenever Moze or Iron Bear inflicts a Status Effect on an enemy, they gain increased Status Effect Damage.", 
        effect: (rank, level) => `Status Effect Damage: +20%\nDuration: 8 seconds\nMax Stacks: 5`
      },
    },
    "6": {
      "Running On Fumes": {
        ranks: 1,
        text: "Whenever Moze or Iron Bear ignites an enemy, Iron Bear does not consume fuel for a short time.", 
        effect: (rank, level) => `Duration: 6 seconds`
      },
    },
  }
};

export default skills;
