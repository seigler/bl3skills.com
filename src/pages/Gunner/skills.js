import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}

/* eslint-disable quotes */
const skills = {
  "Bottomless Mags": {
    "0": {
      "Minigun": {
        text: "The Minigun is capable of sustained rapid fire. Firing for long periods causes the Minigun to overheat, rendering it inoperable for a few seconds.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `Put a little lead in the air and see what falls over.`,
      },
    },
    "1": {
      "Cloud of Lead": {
        text: "Occasionally, Moze's and Iron Bear's shots will deal additional Fire Damage and won't consume ammo.",
        ranks: 5,
        effect: (rank, level) => `Bonus Fire Damage: +${percent(rank, 2.25)}%, Every ${9 - rank} shots does not consume ammo`,
      },
      "Dakka Bear": {
        text: "Adds a manned turret to the back of Iron Bear.",
        ranks: 1,
        effect: (rank, level) => `Fasten your seatbelt, it's going to be a bumpy ride.`,
      },
      "Matched Set": {
        text: "Moze's currently equipped weapon gains a stacking bonus to Magazine Size and Decreased Heat Per Shot for every piece of Equipped Gear that has a matching manufacturer.",
        ranks: 5,
        effect: (rank, level) => `Magazine Size: +${percent(rank, 2)}, Heat Per Shot: -${percent(rank, 2)}`,
      },
    },
    "2": {
      "Let Off Some Steam": {
        text: "Minigun deals more damage as heat increases, and can be fired for longer before overheating.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Damage: up to +80%, Minigun Heat Capacity: +35%`,
      },
      "Stoke the Embers": {
        text: "Increases Moze and Iron Bear's Fire Damage.",
        ranks: 3,
        effect: (rank, level) => `Fire Damage: +${percent(rank, 10)}%`,
      },
      "Redistribution": {
        text: "After Moze scores a Critical Hit, she regenerates ammo for a few seconds.",
        ranks: 1,
        effect: (rank, level) => `Ammo Regeneration: +${percent(rank, 5)} of Magazine, Redistribution Duration: 3 seconds`,
      },
      "Scrappy": {
        text: "Increases Moze's Handling. While moving, Moze's Weapon Swap and Mode Switch Speed are increased.",
        ranks: 5,
        effect: (rank, level) => `Handling: +${percent(rank, 7.5)}, Weapon Swap Speed: +${percent(rank, 7.5)}, Mode Switch Speed: +${percent(rank, 7.5)}`,
      },
      "Salamander": {
        text: "The Salamander is a flamethrower that deals Fire Damage to enemies at close range. Though the Salamander has infinite ammo, it drains Fuel with use.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `Fire... for effect.`,
      },
    },
    "3": {
      "General Winter": {
        text: "Minigun fires Cryo rounds which reduce Heat Gain and Fuel Drain, but deal reduced damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Fuel Drain: -40%, Minigun Damage: -30%, Cryo Efficiency: +20%, Converts to Cryo Damage`,
      },
      "Rushin' Offensive": {
        text: "Moze can sprint and shoot at the same time.",
        ranks: 1,
        effect: (rank, level) => `I don't want any messages saying "I'm holding my position."`,
      },
      "Scorching RPM's": {
        text: "Moze gains increased Fire Rate and Critical Hit Damage.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate: +${percent(rank, 1.5)}, Critical Hit Damage: +${percent(rank, 2.5)}`,
      },
      "Fuel Economy": {
        text: "Reduces Salamander's Fuel Drain. Additionally, Iron Bear's Movement Speed is increased after damaging an enemy with Salamander.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Fuel Drain: -25%, Movement Speed: +25% for 3s`,
      },
    },
    "4": {
      "Exploding. Bullets.": {
        text: "Minigun fires Explosive Rounds that deal increased Splash Damage, but its Fire Rate is decreased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Minigun Fire Rate: -75%, Minigun Damage: +126%`,
      },
      "The Iron Bank": {
        text: "Increases Moze's Magazine Size.",
        ranks: 5,
        effect: (rank, level) => `Magazine Size: +${percent(rank, 4)}`,
      },
      "Specialist Bear": {
        text: "Equipping two of the same Weapons on Iron Bear increases the damage they deal.",
        ranks: 1,
        effect: (rank, level) => `Iron Bear Damage: +${percent(rank, 10)}`,
      },
      "Chemical Warfare": {
        text: "Salamander now deals Corrosive Damage. Additionally, Salamander's Melt Damage is increased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Melt Damage: +50%, Converts to Corrosive Damage`,
      },
    },
    "5": {
      "Some for the Road": {
        text: "Moze gains infinite ammo for a few seconds after exiting Iron Bear.",
        ranks: 1,
        effect: (rank, level) => `Some for the Road Duration: 5 seconds`,
      },
      "Click, Click": {
        text: "Moze gains increased Gun Damage as her magazine empties. The less ammo there is remaining, the greater the increase.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: up to +${percent(rank, 12)}`,
      },
      "Molten Roar": {
        text: "The Salamander burst-fires 3 projectiles with increased Fuel Drain, the first of which leaves a large Fire area.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Fuel Drain: +25%`,
      },
    },
    "6": {
      "Forge": {
        text: "Moze constantly regenerates ammo for her currently equipped weapon.",
        ranks: 1,
        effect: (rank, level) => `Ammo Regeneration: +${percent(rank, 1.5)} of magazine/sec`,
      },
    },
  },
  "Demolition Woman": {
    "0": {
      "V-35 Grenade Launcher": {
        text: "The V-35 is a semi-automatic grenade launcher. Its grenades are not affected by Moze's equipped grenade mod.",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `For when the V-34 just isn't enough`,
      },
    },
    "1": {
      "Fire in the Skag Den": {
        text: "Whenever Moze deals Splash Damage, she deals bonus Fire Damage.",
        ranks: 5,
        effect: (rank, level) => `Bonus Fire Damage: +${percent(rank, 3)}`,
      },
      "Deadlines": {
        text: "Firing Iron Bear Weapons drains less Fuel. Killing an enemy while Iron Bear is active increases Fuel. This skill has diminishing returns.",
        ranks: 3,
        effect: (rank, level) => `Fuel Returned: Up to ${percent(rank, 2)}, Fuel Drain: -${percent(rank, 10)}`,
      },
      "Grizzled": {
        text: "Kill Skill. Killing an enemy reduces Moze's remaining Action Skill Cooldown Time. This skill has diminishing returns.",
        ranks: 5,
        effect: (rank, level) => `Iron Bear Cooldown Time: -${rank * 1}) seconds`,
      },
    },
    "2": {
      "Shaped Charge": {
        text: "Direct hits with the V-35 deal increased damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Direct Hit Damage: +35%`,
      },
      "Means of Destruction": {
        text: "Whenever Moze deals Splash Damage, there is a chance to add ammo to her currently equipped weapon's magazine, with a smaller chance to return a grenade.",
        ranks: 3,
        effect: (rank, level) => `Ammo Chance: ${percent(rank, 3.3)}, Grenade Chance: ${percent(rank, 2)}`,
      },
      "Torgue Cross-Promotion": {
        text: "All Splash Damage dealt by Moze has a chance to double in size.",
        ranks: 5,
        effect: (rank, level) => `+${percent(rank, 3)} chance to double Splash Damage Radius`,
      },
      "Stainless Steel Bear": {
        text: "Iron Bear gains additional armor and increased Maximum Fuel.",
        ranks: 5,
        effect: (rank, level) => `Maximum Fuel: +${percent(rank, 4)}, Iron Bear Armor: +${percent(rank, 6)}`,
      },
      "Vanquisher Rocket Pod": {
        text: "The Vanquisher Rocket Pod is a rocket launcher capable of rapid-firing volleys of unguided explosive rockets.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `If you want guidance, get a sherpa. If you want explosions, get a Vladof.`,
      },
    },
    "3": {
      "Musical Chairs": {
        text: "Occasionally, the V-35 fires a Singularity Grenade that pulls in nearby enemies before exploding.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Singularity: Every 7th grenade`,
      },
      "Pull the Holy Pin": {
        text: "Moze's grenades have a chance to score a Critical Hit, dealing greatly increased damage.",
        ranks: 3,
        effect: (rank, level) => `Critical Hit Chance: +${percent(rank, 10)}`,
      },
      "Auto Bear": {
        text: "After Moze exits Iron Bear, it will remain deployed in place for a short time. While Auto Bear remains active, it will target and attack nearby enemies until its duration ends, then it will charge at an enemy and self-destruct.",
        ranks: 1,
        effect: (rank, level) => `Auto Bear Duration: 15 seconds`,
      },
      "Active Tracking": {
        text: "The Vanquisher Rocket Pod now fires homing rockets and has increased Reload Speed. Hold down Fire Button and aim at enemies to designate up to 6 targets. Releasing Fire Button launches a volley of homing rockets at the designated targets.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Reload Speed: +25%`,
      },
    },
    "4": {
      "Lock and Speedload": {
        text: "The V-35's Reload Speed is greatly increased and it now fires a 5-round burst.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Reload Speed: +25%`,
      },
      "Vampyr": {
        text: "Whenever Moze damages an enemy with a grenade, for every enemy hit, she restores a portion of her missing health.",
        ranks: 5,
        effect: (rank, level) => `Restores +${percent(rank, 4)} of missing health per enemy hit`,
      },
      "Why Can't I Carry All These Grenades": {
        text: "Increases Moze's grenade carrying capacity",
        ranks: 3,
        effect: (rank, level) => `Grenade Capacity: +${rank}`,
      },
      "Target Softening": {
        text: "The Vanquisher Rocket Pod deals greatly reduced damage per rocket, but fires in a 6-rocket spread. Additionally, enemies hit by Vanquisher Rocket Pod rockets take increased damage frmo all sources.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Damage: -74%, Enemy Damage Taken: +15%`,
      },
    },
    "5": {
      "To the Last": {
        text: "Moze gains the ability to throw grenades while in Fight For Your Life. If she threw a grenade before gaining Second Wind, a grenade is refunded.",
        ranks: 1,
        effect: (rank, level) => `The greatest enemy is one with nothing to lose... and a grenade.`,
      },
      "Explosive Punctuation": {
        text: "When Moze deals Splash Damage, her Action Skill Cooldown Rate is briefly increased.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Cooldown Rate: +${percent(rank, 5)}`,
      },
      "Hammerdown Protocol": {
        text: "Instead of a volley of conventional rockets, the Vanquisher Rocket Pod launches a single rocket with a nuclear warhead, dealing massive Radiation Damage.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Damage: +380%, Magazine Size: 1`,
      },
    },
    "6": {
      "Short Fuse": {
        text: "Whenever Moze deals Gun Damage, there is a chance of a secondary explosion centered on the target.",
        ranks: 1,
        effect: (rank, level) => `Secondary Explosion Chance: 20%, Secondary Explosion Damage: 75% of Gun Damage`,
      },
    },
  },
  "Shield of Retribution": {
    "0": {
      "Railgun": {
        text: "The Railgun fires electrified high-velocity projectiles that deal Shock Damage",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `It's like a bullet, only bigger. And faster. And wrapped in lightning.`,
      },
    },
    "1": {
      "Selfless Vengeance": {
        text: "Whenever Moze reloads, she loses a small portion of her health and grants additional Fire Damage to her and her allies' rounds for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Bonus Fire Damage: +${percent(rank, 3)} of gun damage dealt, Current Health Removed: ${percent(rank, 1)}, Selfless Vengeance Duration: 5 sec`,
      },
      "Security Bear": {
        text: "Iron Bear gains a bubble shield that reduces damage taken. The shield deactivates if it sustains too much damage, reactivating after a short cooldown.",
        ranks: 1,
        effect: (rank, level) => `Bubble Recharge Delay: 5sec, 20% Iron Bear Max Health added as Shields`,
      },
      "Armored Infantry": {
        text: "While Moze's shields are active, she gains Damage Reduction and Increased Gun Damage.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}, Damage Reduction: +${percent(rank, 2)}`,
      },
    },
    "2": {
      "Hell on Rails": {
        text: "Railgun now fires superheated rounds that deal Fire Damage, but have increased Fuel Drain per shot.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Fuel Drain: +30%, Converts to Fire Damage`,
      },
      "Drowning in Brass": {
        text: "Kill Skill. Killing an enemy grants Moze a stack of Drowning in Brass. For each stack of Drowning in Brass, Moze's Fire Rate is reduced, but Gun Damage is increased for both her and her allies.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)} per stack, Moze Fire Rate: -${percent(rank, 0.5)} per stack, Max Drowning In Brass Stacks: ${2 + rank}`,
      },
      "Thin Red Line": {
        text: "A portion of Moze's health is removed and cannot be restored, but her Maximum Shield is increased by the same amount.",
        ranks: 3,
        effect: (rank, level) => `+${percent(rank, 20)} Max Health Removed and Added to Max Shields`,
      },
      "Vladof Ingenuity": {
        text: "Moze's Maximum Shield is increased, and she gains resistance to Shock Damage.",
        ranks: 5,
        effect: (rank, level) => `Max Shield: +${percent(rank, 6)}, Shock Damage Resistance: +${percent(rank, 10)}`,
      },
      "Bear Fist": {
        text: "The Bear Fist is a pneumatic-driven fist that deals massive damage to a single target at close range.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `Vladof supports the right to bear armored bear arms.`,
      },
    },
    "3": {
      "Capacitive Armature": {
        text: "When Railgun hits an enemy, it chains to nearby enemies, dealing reduced Shock Damage to more targets.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Splinter Damage: -75%`,
      },
      "Full Can of Whoop-Ass": {
        text: "Entering Iron Bear causes Moze's and her allies' shields to immediately begin recharging at an increased Shield Recharge Rate.",
        effect: (rank, level) => `Shield Recharge Rate: +25%`,
      },
      "Experimental Munitions": {
        text: "Whenever Moze scores a Critical Hit, she deals bonus Fire Damage.",
        ranks: 1,
        effect: (rank, level) => `Bonus Fire Damage: +${percent(rank, 10)} of damage dealt`,
      },
      "Wild Swing": {
        text: "Whenever Bear Fist hits an enemy, it deals random Bonus Elemental Damage to that enemy and all enemies nearby.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Elemental Damage: +35% of damage dealt`,
      },
    },
    "4": {
      "Corrosive Sabot Round": {
        text: "Railgun now fires a specialty round that deals reduced damage and explodes after a short delay. Railgun shots have reduced Fuel Drain and the Magazine Size is increased.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Fuel Drain: -50%, Railgun Damage: -50%, Magazine Size: 2, Converts to Corrosive Damage`,
      },
      "Behind the Iron Curtain": {
        text: "Moze's Shield Recharge Delay is reduced, and her Shield Recharge Rate is increased.",
        ranks: 3,
        effect: (rank, level) => `Shield Recharge Rate: +${percent(rank, 7)}, Shield Recharge Rate: -${percent(rank, 8)}`,
      },
      "Desperate Measures": {
        text: "Moze's Gun Damage is increased depending on how low her health is. The lower her health, the greater the increase.",
        ranks: 3,
        effect: (rank, level) => `Gun Damage: Up to +${percent(rank, 17)}`,
      },
      "Close the Distance": {
        text: "Instead of punching, Bear Fist now launches its fist forward and grabs enemies at greatly increased range, pulling them back to Iron Bear.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Step into my office.`,
      },
    },
    "5": {
      "Phalanx Doctrine": {
        text: "Kill Skill: After killing an enemy, Moze gains a stack of Phalanx Doctrine. Moze's Maximum Shield and Gun Damage are increased. Each stack lasts 30 seconds. There is no stack limit.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 2)} per stack, Max Shields: +${percent(rank, 3)} per stack, Phalanx Doctrine Duration: 30 seconds`,
      },
      "Force Feedback": {
        text: "Whenever Moze scores a Critical Kill, her shields immediately begin recharging.",
        ranks: 1,
        effect: (rank, level) => `Just click on their heads.`,
      },
      "Shockhammer": {
        text: "Bear Fist is now capable of sustained rapid fire, punching as long as the fire button is held. Additionally, Bear Fist has reduced Fuel Drain and deals Bonus Shock Damage with each hit.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Shock Damage: +19% of damage dealt, Fuel Drain: -40%`,
      },
    },
    "6": {
      "Tenacious Defense": {
        text: "Whenever Moze's shield is fully depleted, she instantly restores a portion of her shield, and her Gun Damage is increased for a short time. This skill can only trigger after Moze's shields have fully recharged.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage: +12%, Restores: +40% of Max Shield, Tenacious Defense Duration: 30 seconds`,
      },
    },
  },
};

export default skills;
