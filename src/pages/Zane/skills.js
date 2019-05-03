import SKILLS from '@constants/skills';

const skills = {
  "Hitman": {
    "0": {
      "SNTNL": {
        text: "Send into battle an automated SNTL drone that continually flies through the environment and attacks enemies with its Machine Guns. Pressing LB or RB (controller) while SNTNL is active causes it to attack the enemy under Zane's crosshairs, if any.",
        effect: rank => `Machine Gun Damage - 10, Duration - 24 sec, Cooldown - 36 sec`,
        type: SKILLS.ACTION_SKILL,
        bought: true,
      }
    },
    "1": {
      "Violent Speed": {
        text: "After killing an enemy, Zane gains increased Movement Speed for a few seconds.",
        ranks: 5,
        effect: rank => `Movement Speed +${rank * 4}%, Duration 8 sec`,
      },
      "Cold Bore": {
        text: "Zane gains increased Weapon Swap Speed. The next shot fired after swapping weapons deals Bonus Cryo Damage.",
        ranks: 5,
        effect: rank => `Weapon Swap Speed +${rank * 15}%, Bonus Cryo Damage ${rank * 6}%`,
      },
      "Violent Momentum": {
        text: "Zane's Gun Damage is increased while moving. The quicker he moves, the greater the Gun Damage bonus.",
        ranks: 5,
        effect: rank => `Gun Damage +${rank * 6}% at regular walk speed`,
      },
    },
    "2": {
      "Winter's Drone": {
        text: "Converts SNTNL's primary weapons to Cryo Damage.",
        ranks: 1,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Cool Hand": {
        text: "Zane gains increased Reload Speed. After killing an enemy, Zane's Reload Speed is increased for a few seconds.",
        ranks: 5,
        effect: rank => `Reload Speed +${rank * 2}% (+${rank * 3}% after kill), Duration 8 sec `,
      },
      "Drone Delivery": {
        text: "SNTRY will occasionally drop a free grenade based on your current grenade mod while attacking enemies.",
        ranks: 1,
        effect: rank => `Cooldown 15 sec`,
      },
      "Salvation": {
        text: "After killing an enemy, Zane's weapons gain Life Steal for a few seconds.",
        ranks: 5,
        effect: rank => `Life Steal ${rank * 4}% of damage, Duration 8 sec`,
      },
    },
    "3": {
      "Bad Dose": {
        text: "SNTNL occasionally shoots out a beam of Radiation that weakens enemies and buffs Zane.",
        ranks: 1,
        effect: rank => `Fire Rate +3% per enemy, Movement Speed +6% per enemy, Damage 2, Duration 12 sec, Cooldown 8 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Seein' Red": {
        text: "Activating an Action Skill automatically activates all of Zane's kill skills.",
      },
      "Static Field": {
        text: "SNTNL emits a static field that sends a Shock beam to nearby enemies, draining their shields and replenishing Zane's.",
        ranks: 1,
        effect: rank => `Shield Damage 2 per sec, Cooldown 2 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Boomsday": {
        text: "SNTNL adds a rocket pod to its primary weapons, allowing it to shoot rockets as well as machine guns.",
        ranks: 1,
        effect: rank => `Rocket Damage 50`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Violent Violence": {
        text: "After killing an enemy, Zane gains increased Fire Rate for a few seconds.",
        ranks: 5,
        effect: rank => `Fire Rate +${rank * 4}%, Cooldown 8 sec`,
      },
      "Playing Dirty": {
        text: "After killing an enemy, Zane's next five shots all have a chance to fire an additional projectile.",
        ranks: 5,
        effect: rank => `Extra Shot Chance ${rank * 10}%`,
      },
      "Almighty Ordnance": {
        text: "Hold down LB or RB (controller) while SNTNL is deployed to paint a target area. SNTNL fires a missile barrage at that area, and if an enemy is killed, Almighty Ordnance's duration is reset. This can only be used once per Action Skill use.",
        ranks: 1,
        effect: rank => `Missile Damage 25, 5 Missiles per Barrage`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Good Misfortune": {
        text: "Killing an enemy increases Zane's Action Skill Duration. This skill has diminishing returns.",
        ranks: 3,
        effect: rank => `Kill skill, initial action skill bonus duration +${rank * 5}%`,
      },
    },
    "6": {
      "Death Follows Close": {
        text: "All of Zane's kill skills gain increased effect and duration.",
        ranks: 1,
        effect: rank => `Kill Skill Effect +40%, Kill Skill Duration +4 sec`,
      },
    }
  },
  "Doubled Agent": {
    "0": {
      "Digi-Clone": {
        text: "Spawn a Digi-Clone of Zane. The clone stays in place, but distracts and fires at enemies. Pressing LB or RB (controller) while the Clone is active causes Zane and the Clone to swap places.",
        effect: rank => `Duration - 18 seconds, Cooldown - 26 sec`,
        type: SKILLS.ACTION_SKILL,
        bought: true,
      },
    },
    "1": {
      "Synchronicity": {
        text: "Whenever one or more of Zane's action skills are active, he gains increased Gun Damage for each active action skill.",
        ranks: 5,
        effect: rank => `Gun Damage +${rank * 2}% per active action skill`,
      },
      "Praemunitus": {
        text: "Zane and his Dig-Clone gain increased Magazine Size.",
        ranks: 3,
        effect: rank => `Magazine Size +${rank * 4}%`,
      },
      "Borrowed Time": {
        text: "Zane gains increased Action Skill Duration for every active action skill.",
        ranks: 5,
        effect: rank => `Action Skill Duration +${rank * 4}% per active action skill`,
      },
    },
    "2": {
      "Binary System": {
        text: "Whenever Zane swaps places with his Clone, a Cryo Nova is triggered around Zane and his Clone.",
        ranks: 1,
        effect: rank => `Nova Damage 66`, // TODO scale with level?
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Donnybrook": {
        text: "Whenever Zane kills an enemy ,he and his Digi-Clone receive increased Gun Damage and gain Health Regeneration for a few seconds.",
        ranks: 5,
        effect: rank => `Gun Damage +${rank * 2}%, Health Regen ${rank * 0.5}% of missing health, Duration 8 sec`,
      },
      "Fractal Frags": {
        text: "The Digi-Clone throws a copy of Zane's current grenade mod when it is first activated. If the Digi-Clone is killed, it drops a free grenade. Killing an enemy while the Digi-Clone is active gives the Clone a chance to throw a grenade.",
        ranks: 1,
        effect: rank => `Grenade Chance 30%`,
      },
      "Duct Tape Mod": {
        text: "The first shot fired from Zane's gun has a chance to also fire a grenade. The more grenades in his capacity, the higher the chance.",
        ranks: 5,
        effect: rank => `Grenade Chance up to ${rank * 5}%`,
      },
    },
    "3": {
      "Schadenfreude": {
        text: "Whenever the Clone takes damage, Zane's shield is restored by a portion of that damage.",
        ranks: 1,
        effect: rank => `Shields Restored +11% of damage`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Quick Breather": {
        text: "Whenever Zane swaps places with his Clone, his shield immediately begins recharging.",
        ranks: 1,
      },
      "Which One's Real?": {
        text: "Enemies are more likely to target the Clone for a few seconds after it's summoned and after swapping places.",
        ranks: 1,
        effect: rank => `Duration 6 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Dopplebanger": {
        text: "Hold down LB or RB (controller) to end the action skill early. When Zane's Action Skill is ended, the Clone explodes, dealing Fire Damage to all nearby enemies. The more Action Skill time remaining, the greater the damage.",
        ranks: 1,
        effect: rank => `Damage Up to 1,326`, // TODO scale with level?
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Pocket Full of Grenades": {
        text: "After killing an enemy, Zane gains Grenade Regeneration for a few seconds.",
        ranks: 3,
        effect: rank => `Grenade Regeneration ${rank * 5}%, Duration 8 sec`,
      },
      "Old-U": {
        text: "Press LB or RB (controller) during Fight for Your Life if Digi-Clone is active to destroy the clone and immediately gain a Second Wind with full health.",
        ranks: 1,
      },
      "Supersonic Man": {
        text: "Whenever one or more of Zane's Action Skills are active, he gains increased Movement Speed for each active Action Skill.",
        ranks: 3,
        effect: rank => `Movement Speed +${rank * 4}% per active action skill`,
      },
      "Digital Distribution": {
        text: "If Zane takes health damage while the Clone is active, a portion of that damage is shared to his Clone instead.",
        ranks: 1,
        effect: rank => `Shared Health Damage +75%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Like a Ghost": {
        text: "Zane and his Digi-Clone gain a chance to ignore bullets. This chance is increased for a few seconds after activating an action skill. This effect stacks.",
        ranks: 3,
        effect: rank => `Ignore Bullet Chance ${rank * 4}%, Additional Ignore Bullet Chance +${rank * 1}%, Duration 8 sec`,
      },
      "Boom. Enhance.": {
        text: "Whenever Zane summons his Digi-Clone, it consumes up to 3 grenades. For every grenade consumed, the Digi-Clone gains increased Gun Damage, Max Health, Fire Rate, and Reload Speed.",
        ranks: 1,
        effect: rank => `Gun Damage +11% per grenade, Max Health +17% per grenade, Fire Rate +17% per grenade, Reload Speed +12% per grenade`,
      },
      "Trick of the Light": {
        text: "Zane deals Bonus Shock Damage to enemies that aren't targeting him.",
        ranks: 3,
        effect: rank => `Bonus Damage ${rank * 6}% of damage dealt`,
      },
    },
    "6": {
      "Double Barrel": {
        text: "The Clone is equipped with a copy of Zane's Current Weapon when activated. Swapping places with the Clone causes Zane and his clone to gain increased Gun Damage.",
        ranks: 1,
        effect: rank => `Gun Damage +10%, Item Duping +100%`,
      },
    },
  },
  "Under Cover": {
    "0": {
      "Barrier": {
        text: "Drop a deployable Barrier that blocks incoming projectiles. Zane and his allies can shooter through the Barrier, dealing increased Gun Damage. Pressing LB or RB (controller) while Barrier is active picks up and holds the Barrier, but the size and bonuses are decreased.",
        effect: rank => `Duration - 9 sec, Cooldown - 18 sec, Damage Amp +20%`,
        type: SKILLS.ACTION_SKILL,
        bought: true,
      },
    },
    "1": {
      "Adrenaline": {
        text: "Zane gains increased Action Skill Cooldown Rate. This bonus is based on the amount of shield he has. The more percent full, the greater the bonus.",
        ranks: 5,
        effect: rank => `Action Skill Cooldown Rate - Up to +4%`,
      },
      "Hearty Stock": {
        text: "Zane gains increased Maximum Shield Capacity.",
        ranks: 5,
        effect: rank => `Max Shield +6%`,
      },
      "Ready for Action": {
        text: "Zane gains improved Shield Recharge Rate and Shield Recharge Delay.",
        ranks: 5,
        effect: rank => `Shield Recharge Rate +6%, Shield Recharge Delay -8%`,
      },
    },
    "2": {
      "Charged Relay": {
        text: "Whenever Zane or an ally touches the Barrier, they gain increased Movement Speed and Fire Rate for a few seconds.",
        ranks: 1,
        effect: rank => `Fire Rate +13%, Movement Speed +11%, Duration 8 sec after moving away from barrier`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Brainfreeze": {
        text: "Whenever Zane scores a Critical Hit on an enemy, there's a chance they will be Slowed.",
        ranks: 5,
        effect: rank => `Slow Chance 2.5%`,
      },
      "Stiff Upper Lip": {
        text: "Whenever Zane is damaged, he gains Damage Resistance against that damage type.",
        ranks: 3,
        effect: rank => `Damage Resistance +5%`,
      },
      "Rise to the Occasion": {
        text: "Zane gains Health Regeneration. The lower his shield is, the higher the bonus. While Zane's shields are full, he does not receive any health regeneration.",
        ranks: 5,
        effect: rank => `Health Regeneration up to +1% of Max Health`,
      },
    },
    "3": {
      "Nanites or Some Shite": {
        text: "Zane and his allies gain Health Regeneration, increased Reload Speed, and greatly improved Shield Recharge Delay while near his Barrier. The lower their health, the more health is regenerated.",
        ranks: 1,
        effect: rank => `Health Regeneration up to 4% of Max Health, Shield Recharge Delay -33%, Reload Speed +11%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Confident Competence": {
        text: "While Zane's shields are active, he gains increased Gun Damage and Accuracy. This bonus is based on the amount of shields he has. The more percent full, the greater the bonus.",
        ranks: 1,
        effect: rank => `Gun Damage up to +10%, Accuracy up to +22%`,
      },
      "All-rounder": {
        text: "Zane's Barrier becomes a dome, covering all sides.",
        ranks: 1,
        effect: rank => `Barrier cooldown +20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Redistribution": {
        text: "Zane and allies near the Barrier gain increased Gun Damage for a few seconds after the Barrier takes damage.",
        ranks: 1,
        effect: rank => `Gun Damage +9%, Duration 3 sec`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Really Expensive Jacket": {
        text: "Elemental damage over time effects applied to Zane have reduced duration.",
        ranks: 1,
        effect: `Elemental Effect Duration -50%`,
      },
      "Best Served Cold": {
        text: "Whenever Zane kills an enemy, they create a Cryo Nova, dealing damage to all nearby enemies. This skill has a short cooldown.",
        ranks: 5,
        effect: rank => `Damage 3, Cooldown 3 sec`,
      },
      "Futility Belt": {
        text: "Zane gains resistance to non-elemental damage. Kill Skill - All elemental damage Zane takes is converted to non-elemental damage.",
        ranks: 1,
        effect: rank => `Damage Reduction +22%, Duration 8 sec`,
      },
      "Deterrence Field": {
        text: "Enemies that touch the Barrier take Shock Damage and are staggered.",
        ranks: 1,
        effect: rank => `Shock Damage 18`, // TODO level scaling?
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Refreshment": {
        text: "Whenever Zane damages a frozen enemy with his weapon, he gains some of that damage back as health.",
        ranks: 3,
        effect: rank => `Life Steal 8% of damage dealt`,
      },
      "Calm, Cool, Collected": {
        text: "Whenever Zane Freezes an enemy, his shield instantly begins recharging. If Zane's shields are already full, he regenerates health for a few seconds. If Zane's health is already full, his Action Skill Cooldowns and Durations are immediately reset.",
        ranks: 1,
        effect: rank => `Health Regeneration up to 4% max health, Regeneration Duration 3 sec`,
      },
      "Nerves of Steel": {
        text: "Zane gains increasing Accuracy and Handling. The longer his shield is full, the greater the bonus.",
        ranks: 3,
        effect: rank => `Accuracy +2% per sec, Handling +2.5% per sec, 99 Max Stacks`,
      },
    },
    "6": {
      "Distributed Denial": {
        text: "Zane's barrier gains the effects of his currently equipped Shield Mod. Additionally, shield effects are applied to all allies near the barrier. Bonuses to Zane are reduced.",
        ranks: 1,
      },
    },
  },
};

export default skills;
