/* eslint-disable space-before-function-paren */
import SKILLS from '@constants/skills';

function percent (rank, unit) {
  return Math.round(rank * unit * 10) / 10;
}
function flat (rank, level, unit) {
  return Math.floor(rank * unit);
}

// Stiff Upper Lip Damage Resistance
function getStiffUpperLipDamageResistance(rank) {
  switch (rank) {
    case 1:
      return 6;
    case 2:
      return 12;
    case 3:
      return 16;
    default:
      return 0;
  }
}

// Nerves of Steel Handling
function getNervesOfSteelHandling(rank) {
  switch (rank) {
    case 1:
      return 2.4;
    case 2:
      return 4.8;
    case 3:
      return 7;
    default:
      return 0;
  }
}

// Cold Bore Weapon Swap Speed
function getColdBoreWeaponSwapSpeed(rank) {
  switch (rank) {
    case 1:
      return 13;
    case 2:
      return 23;
    case 3:
      return 31;
    case 4:
      return 38;
    case 5:
      return 43;
    default:
      return 0;
  }
}

// Cool Hand Passive Reload Speed
function getCoolHandPassiveReloadSpeed(rank) {
  switch (rank) {
    case 1:
      return 2.9;
    case 2:
      return 5.7;
    case 3:
      return 8.3;
    case 4:
      return 10.7;
    case 5:
      return 13;
    default:
      return 0;
  }
}

// Cool Hand After Kill Reload Speed
function getCoolHandAfterKillReloadSpeed(rank) {
  switch (rank) {
    case 1:
      return 4;
    case 2:
      return 7;
    case 3:
      return 11;
    case 4:
      return 14;
    case 5:
      return 17;
    default:
      return 0;
  }
}

// Man Of Focus Accuracy
function getManOfFocusAccuracy(rank) {
  switch (rank) {
    case 1:
      return 7;
    case 2:
      return 14;
    case 3:
      return 19;
    case 4:
      return 24;
    case 5:
      return 29;
    default:
      return 0;
  }
}

// Man Of Focus Handling
function getManOfFocusHandling(rank) {
  switch (rank) {
    case 1:
      return 7.4;
    case 2:
      return 13.8;
    case 3:
      return 19.4;
    case 4:
      return 24.2;
    case 5:
      return 28.6;
    default:
      return 0;
  }
}

/* eslint-disable quotes */
const skills = {
  "Under Cover": {
    "0": {
      "Barrier": {
        text: "Drop a deployable Barrier that blocks incoming projectiles. Zane and his allies can shoot through the Barrier, dealing increased Gun Damage. Pressing [Action Skill key] while Barrier is active picks up and holds the Barrier, but the size and bonuses are decreased.",
        effect: (rank, level) => `Duration: 14 seconds\nCooldown: 24 seconds\nGun Damage Amp: +25%`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Adrenaline": {
        text: "Zane gains increased Action Skill Cooldown Rate. This bonus is based on the amount of shield he has. The more percent full, the greater the bonus.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Cooldown Rate: Up to +${percent(rank, 7)}%`,
      },
      "Hearty Stock": {
        text: "Zane gains increased Maximum Shield Capacity.",
        ranks: 3,
        effect: (rank, level) => `Maximum Shield: +${percent(rank, 10)}%`,
      },
      "Ready for Action": {
        text: "Zane gains improved Shield Recharge Rate and Shield Recharge Delay.",
        ranks: 5,
        effect: (rank, level) => `Shield Recharge Delay: -${percent(rank, 7)}%\nShield Recharge Rate: +${percent(rank, 6)}%`,
      },
    },
    "2": {
      "Charged Relay": {
        text: "Whenever Zane or an ally touches the Barrier, they gain increased Movement Speed and Reload Speed for a few seconds.",
        ranks: 0,
        effect: (rank, level) => `Reload Speed: +20%\nMovement Speed: +11%\nDuration: 8 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Brainfreeze": {
        text: "Whenever Zane scores a Critical Hit on an enemy, there is a chance they will be Slowed. This effect stacks until the target is Frozen.",
        ranks: 5,
        effect: (rank, level) => `Slow Chance: ${percent(rank, 4)}%`,
      },
      "Stiff Upper Lip": {
        text: "Whenever Zane is damaged, he gains Damage Resistance against that damage type.",
        ranks: 3,
        effect: (rank, level) => `Damage Resistance: +${getStiffUpperLipDamageResistance(rank)}%`,
      },
      "Rise to the Occasion": {
        text: "Zane gains Health Regeneration. The lower his shield is, the higher the bonus.",
        ranks: 5,
        effect: (rank, level) => `Health Regeneration: Up to +${percent(rank, 1)}% of Max Health/sec`,
      },
    },
    "3": {
      "Nanites or Some Shite": {
        text: "Zane and his allies gain Health Regeneration, increased Reload Speed, and greatly improved Shield Recharge Delay while near his Barrier. The lower their health, the more health is regenerated.",
        ranks: 0,
        effect: (rank, level) => `Team Health Regen: Up to +4% of Max Health/sec\nTeam Shield Recharge Delay: -33%\nTeam Reload Speed: +11%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Confident Competence": {
        text: "While Zane's shields are active, he gains increased Gun Damage and Accuracy. These bonuses are based on the amount of shields he has. The more percent full, the greater the bonuses.",
        ranks: 1,
        effect: (rank, level) => `Gun Damage: Up to +35%\nAccuracy: Up to +33%`,
      },
      "All-Rounder": {
        text: "Zane's Barrier becomes a dome, covering all sides.",
        ranks: 0,
        effect: (rank, level) => `Barrier Cooldown: +20%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Redistribution": {
        text: "Zane and allies near the Barrier gain increased Gun Damage for a few seconds after the Barrier takes damage.",
        ranks: 0,
        effect: (rank, level) => `Team Gun Damage: +10%\nDuration: 3 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Really Expensive Jacket": {
        text: "Elemental Status Effects applied to Zane have reduced duration.",
        ranks: 1,
        effect: (rank, level) => `Status Effect Duration: -50%`,
      },
      "Best Served Cold": {
        text: "Kill Skill. Whenever Zane kills an enemy, they create a Cryo Nova, dealing damage to all nearby enemies. This skill has a short cooldown.",
        ranks: 5,
        effect: (rank, level) => `Cryo Damage: ${flat(rank, level, 2)} (increases with character level)\nCooldown: 3 seconds`,
      },
      "Futility Belt": {
        text: "Zane gains resistance to non-elemental damage.\nKill Skill. After killing an enemy, all elemental damage Zane takes is converted to non-elemental damage.",
        ranks: 1,
        effect: (rank, level) => `Non-Elemental Damage Resistance: +15%\nDuration: 8 seconds`,
      },
      "Deterrence Field": {
        text: "Enemies that touch the Barrier take Shock Damage and are staggered.",
        ranks: 0,
        effect: (rank, level) => `Shock Damage: ${flat(1, level, 27)} (increases with character level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Refreshment": {
        text: "Whenever Zane damages a frozen enemy with his weapon, he gains some of that damage back as health.",
        ranks: 3,
        effect: (rank, level) => `Life Steal: +${percent(rank, 8)}% of damage dealt`,
      },
      "Calm, Cool, Collected": {
        text: "Whenever Zane Freezes an enemy, his shield instantly begins recharging.\nIf Zane's shields are already full, he regenerates health for a few seconds.\nIf Zane's health is already full, his Action Skill Cooldowns and Durations are immediately reset.",
        ranks: 1,
        effect: (rank, level) => `Health Regeneration: +3% of Max Health per second\nHealth Regeneration Duration: 3 seconds`,
      },
      "Nerves of Steel": {
        text: "Zane gains increasing Accuracy and Handling. The longer his shield is full, the greater the bonuses.",
        ranks: 3,
        effect: (rank, level) => `Accuracy: +${percent(rank, 2)}% per second\nHandling: +${getNervesOfSteelHandling(rank)}% per second\nMaximum Stacks: 15`,
      },
    },
    "6": {
      "Distributed Denial": {
        text: "Zane's Barrier gains the effects of his currently equipped Shield Mod. Additionally, shield effects are applied to all allies near the Barrier. Bonuses to Zane are reduced.",
        ranks: 1,
      },
    },
  },
  "Hitman": {
    "0": {
      "SNTNL": {
        text: "Send into battle an automated SNTNL drone that continually flies through the environment and attacks enemies with its Machine Guns. Pressing [Action Skill key] while SNTNL is active causes it to attack the enemy under Zane's crosshairs, if any. Machine Gun Element: Non-Elemental.",
        effect: (rank, level) => `Machine Gun Damage: ${flat(rank, level, 6)} (increases with character level)\nDuration: 24 seconds\nCooldown: 60 seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      }
    },
    "1": {
      "Violent Speed": {
        text: "Kill Skill. After killing an enemy, Zane gains increased Movement Speed for a few seconds. This effect stacks twice.",
        ranks: 5,
        effect: (rank, level) => `Movement Speed: +${percent(rank, 4)}%\nDuration: 8 seconds\nMaximum Stacks: 2`,
      },
      "Cold Bore": {
        text: "Zane gains increased Weapon Swap Speed. The next shot fired after swapping weapons deals Bonus Cryo Damage.",
        ranks: 5,
        effect: (rank, level) => `Weapon Swap Speed: +${getColdBoreWeaponSwapSpeed(rank)}%\nBonus Cryo Damage: +${percent(rank, 6)}% of damage dealt`,
      },
      "Violent Momentum": {
        text: "Zane's Gun Damage is increased while moving. The quicker he moves, the greater the bonus.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)}% at default walk speed`,
      },
    },
    "2": {
      "Winter's Drone": {
        text: "Converts SNTNL's primary weapons to Cryo Damage.",
        ranks: 0,
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `SNTNL Weapons Element: Cryo`,
      },
      "Cool Hand": {
        text: "Zane gains increased Reload Speed.\nKill Skill. After killing an enemy, Zane's Reload Speed is increased for a few seconds. This effect stacks twice.",
        ranks: 5,
        effect: (rank, level) => `Reload Speed: +${getCoolHandPassiveReloadSpeed(rank)}%\nAdditional Reload Speed: +${getCoolHandAfterKillReloadSpeed(rank)}%\nDuration: 8 seconds\nMaximum Stacks: 2`,
      },
      "Drone Delivery": {
        text: "SNTRY will occasionally drop a free grenade based on your current grenade mod while attacking enemies.",
        ranks: 1,
        effect: (rank, level) => `Cooldown: 15 seconds`,
      },
      "Salvation": {
        text: "Kill Skill. After killing an enemy, Zane's weapons gain Life Steal for a few seconds.",
        ranks: 5,
        effect: (rank, level) => `Life Steal: +${percent(rank, 2)}% of damage dealt\nDuration: 8 seconds`,
      },
    },
    "3": {
      "Bad Dose": {
        text: "SNTNL occasionally shoots out a beam of Radiation that weakens enemies and buffs Zane. For every weakened enemy, Zane's Movement Speed and Fire Rate are increased. Weakened enemies have decreased Movement Speed and Attack Speed.",
        ranks: 0,
        effect: (rank, level) => `Fire Rate: +2% per affected enemy\nMovement Speed: +6% per affected enemy\nBeam Damage: ${flat(rank, level, 4)} (increases with character level)\nDuration: 12 seconds\nCooldown: 8 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Death Follows Close": {
        text: "All of Zane's Kill Skills gain increased effect and duration.",
        ranks: 1,
        effect: (rank, level) => `Kill Skill Bonus: +25%\nKill Skill Duration: +7 seconds`,
      },
      "Static Field": {
        text: "SNTNL emits a static field that sends a Shock Beam to nearby enemies, draining their shields and replenishing Zane's.",
        ranks: 0,
        effect: (rank, level) => `Shield Damage: 2/sec (increases with character level)\nCooldown: 2 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Boomsday": {
        text: "SNTNL adds a rocket pod to its primary weapons, allowing it to shoot rockets as well as machine guns. Element: Non-Elemental.",
        ranks: 0,
        effect: (rank, level) => `Rocket Damage: ${flat(rank, level, 32)} (increases with character level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Violent Violence": {
        text: "Kill Skill. After killing an enemy, Zane gains increased Fire Rate for a few seconds. This effect stacks twice.",
        ranks: 5,
        effect: (rank, level) => `Fire Rate: +${percent(rank, 3)}%\nCooldown: 8 seconds\nMaximum Stacks: 2`,
      },
      "Playing Dirty": {
        text: "Kill Skill. After killing an enemy, Zane's next five shots all have a chance to fire an additional projectile.",
        ranks: 5,
        effect: (rank, level) => `Extra Shot Chance: ${percent(rank, 10)}%`,
      },
      "Almighty Ordnance": {
        text: "Hold down [Action Skill key] while SNTNL is deployed to paint a target area. SNTNL fires a missile barrage at that area, and if an enemy is killed, SNTNL's duration is reset. This can only be used once per Action Skill use.",
        ranks: 0,
        effect: (rank, level) => `Missile Damage: ${flat(rank, level, 56)} (increases with character level)\nMissiles per Barrage: 4`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Good Misfortune": {
        text: "Kill Skill. Killing an enemy increases Zane's Action Skill Duration. This skill has diminishing returns.",
        ranks: 3,
        effect: (rank, level) => `Action Skill Duration Returned: +${percent(rank, 4)}% of Max Duration`,
      },
    },
    "6": {
      "Seein' Red": {
        text: "Activating an Action Skill automatically activates all of Zane's Kill Skills.",
        ranks: 1,
      }
    }
  },
  "Doubled Agent": {
    "0": {
      "Digi-Clone": {
        text: "Spawn a Digi-Clone of Zane. The Digi-Clone stays in place, but distracts and fires at enemies. Pressing [Action Skill key] while the Digi-Clone is active causes Zane and the Digi-Clone to swap places.",
        effect: (rank, level) => `Duration: 15 seconds\nCooldown: 28 seconds`,
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
      },
    },
    "1": {
      "Synchronicity": {
        text: "Zane gains increased Gun Damage for each active Action Skill.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)}% per active Action Skill`,
      },
      "Praemunitus": {
        text: "Zane and his Digi-Clone gain increased Magazine Size.",
        ranks: 3,
        effect: (rank, level) => `Magazine Size: +${percent(rank, 8.333)}%\nDigi-Clone Magazine Size: +${percent(rank, 8.333)}%`,
      },
      "Borrowed Time": {
        text: "Zane gains increased Action Skill Duration for each active Action Skill.",
        ranks: 5,
        effect: (rank, level) => `Action Skill Duration: +${percent(rank, 6)}% per active Action Skill`,
      },
    },
    "2": {
      "Binary System": {
        text: "Whenever Zane swaps places with his Digi-Clone, a Cryo Nova is triggered around Zane and his Digi-Clone.",
        ranks: 0,
        effect: (rank, level) => `Cryo Damage: ${flat(rank, level, 46)} (increases with character level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Donnybrook": {
        text: "Kill Skill. Whenever Zane kills an enemy, he and his Digi-Clone receive increased Gun Damage and gain Health Regeneration for a few seconds. This effect stacks twice.",
        ranks: 5,
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}%\nHealth Regeneration: +${percent(rank, 0.5)}% of Missing Health/sec\nDigi-Clone Gun Damage: +${percent(rank, 3)}%\nDigi-Clone Health Regen: +${percent(rank, 0.5)}% Missing Health/sec\nDuration: 8 seconds\nMaximum Stacks: 2`,
      },
      "Fractal Frags": {
        text: "The Digi-Clone throws a copy of Zane's current grenade mod when it is first activated. If the Digi-Clone is killed, it drops a free grenade. Killing an enemy while the Digi-Clone is active gives the Digi-Clone a chance to throw a grenade.",
        ranks: 1,
        effect: (rank, level) => `Grenade Chance: 30%`,
      },
      "Duct Tape Mod": {
        text: "The first shot fired from Zane's gun has a chance to also fire a grenade. This skill has a short cooldown.",
        ranks: 5,
        effect: (rank, level) => `Grenade Chance: ${percent(rank, 4)}%\nCooldown: 8 seconds`,
      },
    },
    "3": {
      "Schadenfreude": {
        text: "Whenever the Digi-Clone takes damage, Zane's shield is restored by a portion of that damage.",
        ranks: 0,
        effect: (rank, level) => `Shields Restored: 100% of damage taken by Digi-Clone`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Quick Breather": {
        text: "Whenever Zane swaps places with his Digi-Clone, his shield immediately begins recharging. The Digi-Clone also immediately restores health.",
        ranks: 1,
        effect: (rank, level) => `Digi-Clone Health Restored: 50% of Max Health`,
      },
      "Which One's Real?": {
        text: "Enemies are more likely to target the Digi-Clone for a few seconds after it's summoned and after swapping places.",
        ranks: 0,
        effect: (rank, level) => `Duration: 4 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "Dopplebanger": {
        text: "Hold down [Action Skill key] to end the action skill early. When Zane's Action Skill is ended, the Digi-Clone explodes, dealing Splash Damage to all nearby enemies. The more Action Skill time remaining, the greater the damage.",
        ranks: 0,
        effect: (rank, level) => `Damage: Up to ${flat(rank, level, 280)} (increases with character level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Pocket Full of Grenades": {
        text: "Kill Skill. After killing an enemy, Zane gains Grenade Regeneration for a few seconds.",
        ranks: 3,
        effect: (rank, level) => `Grenade Regeneration: +${percent(rank, 5)}% per second\nDuration: 8 seconds`,
      },
      "Old-U": {
        text: "Press [Action Skill key] during Fight For Your Life if Digi-Clone is active to destroy the Digi-Clone and immediately gain a Second Wind with full health.",
        ranks: 1,
        effect: (rank, level) => `Health Restored: 100% of Maximum Health`,
      },
      "Supersonic Man": {
        text: "Zane gains increased Movement Speed for each active Action Skill.",
        ranks: 3,
        effect: (rank, level) => `Movement Speed: +${percent(rank, 4)}% per active Action Skill`,
      },
      "Digital Distribution": {
        text: "If Zane takes health damage while the Digi-Clone is active, a portion of that damage is inflicted on his Digi-Clone instead.",
        ranks: 0,
        effect: (rank, level) => `Damage Shared: 75%`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "5": {
      "Like a Ghost": {
        text: "Zane and his Digi-Clone gain a chance to ignore bullets. This chance is increased for a few seconds after activating an Action Skill. This effect stacks.",
        ranks: 3,
        effect: (rank, level) => `Ignore Bullet Chance: +${percent(rank, 2)}%\nAdditional Ignore Bullet Chance: +${percent(rank, 3)}%\nDuration: 8 seconds`,
      },
      "Boom. Enhance.": {
        text: "Whenever Zane summons his Digi-Clone, it consumes up to 3 grenades. For every grenade consumed, the Digi-Clone gains increased Gun Damage, Maximum Health, Fire Rate, Reload Speed, and Digi-Clone Duration.",
        ranks: 1,
        effect: (rank, level) => `Digi-Clone Gun Damage: +20% per grenade\nDigi-Clone Maximum Health: +81% per grenade\nDigi-Clone Fire Rate: +5% per grenade\nDigi-Clone Reload Speed: +31% per grenade\nDigi-Clone Duration: +25% per grenade`,
      },
      "Trick of the Light": {
        text: "Zane deals Bonus Cryo Damage to enemies that aren't targeting him.",
        ranks: 3,
        effect: (rank, level) => `Bonus Cryo Damage: +${percent(rank, 12)}% of damage dealt`,
      },
    },
    "6": {
      "Double Barrel": {
        text: "The Digi-Clone is equipped with a copy of Zane's Current Weapon when activated. Swapping places with the Digi-Clone causes Zane and his Digi-Clone to gain increased Gun Damage.",
        ranks: 1,
        effect: (rank, level) => `Item Duping: +100%\nGun Damage: +25%\nDigi-Clone Gun Damage: +25%`,
      },
    },
  },
  "The Professional": {
    "0": {
      "MNTIS Shoulder Cannon": {
        ranks: 0,
        text: "Zane equips a Shoulder Mount ed Cannon. Pressing [Action Skill key] causes Zane to fire his cannon at his crosshairs and consume one charge.",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `Max Charges: 3\nCooldown: 12 seconds\nDamage: 46`
      },
    },
    "1": {
      "Man Of Focus": {
        ranks: 5,
        text: "Activating an Action Skill grants Zane increased Accuracy and Handling for a short time. This effect stacks.",
        effect: (rank, level) => `Accuarcy: +${percent(rank, getManOfFocusAccuracy(rank))}%\nHandling: +${percent(rank, getManOfFocusHandling(rank))}%\nDuration: 12 seconds\nMax Stacks: 10`
      },
      "Renegade": {
        ranks: 3,
        text: "After scoring a Critical Hit, Zane Regenerates Health for a short time.",
        effect: (rank, level) => `Health Regeneration: up to +${percent(rank, 0.5)}% Max Health / sec\nDuration: 12 seconds`
      },
      "Déjà Vu": {
        ranks: 5,
        text: "Whenever Zane kills an enemy with a Critical Hit, there is a chance for 1 ammo to be added to his magazine.",
        effect: (rank, level) => `Chance to add ammo: ${percent(rank, 9)}%`
      },
    },
    "2": {
      "Colder Shoulder": {
        ranks: 0,
        text: "Converts Zane's MNTIS Shoulder Cannon damage to Cryo Damage but deals reduced damage. Additionally, Zane gains Increased Cryo Freeze Rate.",
        type: SKILLS.AUGMENT_CHEVRON,
        effect: (rank, level) => `Cannon Damage: -10%\nFreeze Rate: +20%`
      },
      "Headman's Hand": {
        ranks: 5,
        text: "Kill Skill. Zane gains increased Critical Hit Damage. This effect stacks twice.",
        effect: (rank, level) => `Critical Hit Damage: +${percent(rank, 4)}%\nDuration: 8 seconds`
      },
      "Tunnel Vision": {
        ranks: 3,
        text: "While moving, Zane gains increased Accuracy and Handling. The quicker Zane moves, the greater the bonus.",
        effect: (rank, level) => `Accuracy: up to +${percent(rank, 10)}% at default walk speed\nHandling: up to +${percent(rank, 11)}% at default walk speed`
      },
      "Commitment": {
        ranks: 5,
        text: "Kill Skill. Zane gains increased Gun Damage and Action Skill Cooldown Rate.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 4)}%\nCooldown Rate: +${percent(rank, 4)}%`
      },
    },
    "3": {
      "Wetwork": {
        ranks: 0,
        text: "Whenever Zane kills an enemy with his Shoulder Cannon, that enemy explodes into an Elemental Puddle.",
        effect: (rank, level) => `Explosion Damage: 32 (increases with character level)\nPuddle Damage: 18 per second (increases with character level)`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Fugitive": {
        ranks: 1,
        text: "Zane can sprint and shoot at the same time.",
        effect: (rank, level) => ``
      },
      "Brain Drain": {
        ranks: 0,
        text: "Whenever Zane kills an enemy with a Critical Hit from his Shoulder Cannon, two charges are instantly returned.",
        effect: (rank, level) => ``,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "4": {
      "No Way Out": {
        ranks: 0,
        text: "Whenever Zane damages an enemy with his Shoulder Cannon, that enemy is pulled to him and takes Increased Damage for a short time. Additionally, Zane's MNTIS Shoulder Cannon cooldown time is increased.",
        effect: (rank, level) => `Cooldown: +20%\nDamage Increase: +25%\nDuration: 6 seconds`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
      "Domino Effect": {
        ranks: 5,
        text: "Whenever Zane scores a Critical Hit, he gains increased Fire Rate and Reload Speed for a short time. If he scores a Critical Hit with his Action Skill, he doubles this effect.",
        effect: (rank, level) => `Reload Speed: +${percent(rank, 4)}%\nFire Rate: +${percent(rank, 3)}%\nDuration: 8 seconds`
      },
      "The Art Of War": {
        ranks: 5,
        text: "After activating an Action Skill or Action Skill Ability, Zane's next short fired from his weapon deals Increased Damage. This effect stacks.",
        effect: (rank, level) => `Gun Damage: +${percent(rank, 3)}%\nMax Stacks: 10`
      },
    },
    "5": {
      "Sheer Will": {
        ranks: 3,
        text: "Zane gains increased Action Skill Cooldown Rate. Scoring a Critical Hit increases this effect. This effect stacks.",
        effect: (rank, level) => `Cooldown Rate: +${percent(rank, 5)}%\nCooldown Rate: +${percent(rank, 2.5)}% after Critical Hit\nDuration: 8 seconds\nMax Stacks: 15`
      },
      "Eraser": {
        ranks: 3,
        text: "Zane's Critical Hits pierce through enemies for all weapons, dealing Increased Damage for every enemy pierced.",
        effect: (rank, level) => `Pierced Shot Damage: +${percent(rank, 40)}%`
      },
      "Proliferation": {
        ranks: 0,
        text: "Zane's MNTIS Shoulder Cannon gains Additional Charges and deals Increased Damage based on the number of charges remaining.",
        effect: (rank, level) => `Additional Charges: +2\nCannon Damage: +20% per charge`,
        type: SKILLS.AUGMENT_CHEVRON,
      },
    },
    "6": {
      "Our Man Flint": {
        ranks: 1,
        text: "While aiming down sights, Zane's weapons deal Bonus Damage and automatically apply their Status Effect when he scores a Critical Hit.",
        effect: (rank, level) => `Bonus Damage: 25% of damage dealt`
      },
    }
  }
};

export default skills;
