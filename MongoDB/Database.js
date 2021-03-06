
db.createCollection('clUsers');
db.clUsers.createIndex({'uName': 1, 'uEmail': 1, 'uDisplayName': 1}, {unique: true});
db.clUsers.insert({
    "uID": "0cef72b6-a5c8-490d-ba6c-efb28a80bcc1",
    "uName": "user0001",
    "uPassword": "123456",
    "uDisplayName": "Hero-01",
    "uEmail": "user0001@gmail.com",
    "uLoginMethod": "FB",
    "uToken": "8d795a36fdfa772b51fcf571f88bdefd",
    "uExpireTime": new Date(),
    "uCreateTime": new Date(),
    "uActive": true
});
db.clUsers.find({});

db.createCollection('clHeroes');
db.clHeroes.createIndex({'uID': 1, 'objectName': 1, 'uOwner': 1}, {unique: true});
db.clHeroes.insertMany([{
    'uID': '4baf73401e6b68e50768edfbdb22dfad',
    'objectName': 'Warrior',
    'objectAvatar': 'Warrior-avatar',
    'objectModel': 'Warrior-model',
    'characterClass': 'Warrior',
    'characterAttackPoint': 20,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 20,
    'maxDefendPoint': 500,
    'characterHealthPoint': 100,
    'characterMaxHealthPoint': 100,
    'maxHealthPoint': 9999,
    'currentGold': 500,
    'maxGold': 999999999,
    'goldPerStep': 25,
    'currentEnergy': 30,
    'maxEnergy': 30,
    'lastUpdateEnergy': new Date(),
    'currentGlory': 0,
    'maxGlory': 999999999,
    'characterSkillSlots': [],
    'uOwner': '',
    'characterLevel': 1,
    'characterStep': 0,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    },{
    'uID': 'b7a23f1b6b9c27fc5b8c6d840dc83f93',
    'objectName': 'Wizard',
    'objectAvatar': 'Wizard-avatar',
    'objectModel': 'Wizard-model',
    'characterClass': 'Wizard',
    'characterAttackPoint': 35,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1.5,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 10,
    'maxDefendPoint': 500,
    'characterHealthPoint': 80,
    'characterMaxHealthPoint': 80,
    'maxHealthPoint': 9999,
    'currentGold': 500,
    'maxGold': 999999999,
    'goldPerStep': 25,
    'currentEnergy': 30,
    'maxEnergy': 30,
    'lastUpdateEnergy': new Date(),
    'currentGlory': 0,
    'maxGlory': 999999999,
    'characterSkillSlots': [],
    'uOwner': '',
    'characterLevel': 1,
    'characterStep': 0,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    },{
    'uID': 'bb383f1abab8cdf7619b1723a21c6e1f',
    'objectName': 'Archer',
    'objectAvatar': 'Archer-avatar',
    'objectModel': 'Archer-model',
    'characterClass': 'Archer',
    'characterAttackPoint': 15,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 0.75,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 15,
    'maxDefendPoint': 500,
    'characterHealthPoint': 90,
    'characterMaxHealthPoint': 90,
    'maxHealthPoint': 9999,
    'currentGold': 500,
    'maxGold': 999999999,
    'goldPerStep': 25,
    'currentEnergy': 30,
    'maxEnergy': 30,
    'lastUpdateEnergy': new Date(),
    'currentGlory': 0,
    'maxGlory': 999999999,
    'characterSkillSlots': [],
    'uOwner': '',
    'characterLevel': 1,
    'characterStep': 0,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    }]);
db.clHeroes.find({}); 

db.createCollection('clSkills');
db.clSkills.createIndex({'uID': 1, 'skillName': 1}, {unique: true});   
db.clSkills.insertMany([{
    'uID': '502ec8465441f1d108b8c963ec402b08',
    'objectName': 'Normal Attack',
    'objectAvatar': 'NormalAttack-avatar',
    'objectModel': 'NormalAttack-model',
    'characterClasses': ['Warrior','Archer','Wizard'],
    'levelRequire' : 0,
    'skillDelay': 0.1,
    'skillTime': 0.5,
    'skillEffects': [
        {
            'skillValue': 1,
            'skillMethod': 'ApplyDamage'
        }
    ]
    },{
    'uID': 'b4d0a149ec60fb7124d3d4d72ea8174b',
    'objectName': 'Bash',
    'objectAvatar': 'Bash-avatar',
    'objectModel': 'Bash-model',
    'characterClasses': ['Warrior'],
    'levelRequire' : 0,
    'skillDelay': 1,
    'skillTime': 1,
    'skillEffects': [
        {
            'skillValue': 20,
            'skillMethod': 'ApplyDamage'
        }
    ]
    },{
    'uID': '38c3a4da101090c04ae3428422e80c3f',
    'objectName': 'Fire ball',
    'objectAvatar': 'FireBall-avatar',
    'objectModel': 'FireBall-model',
    'characterClasses': ['Wizard'],
    'levelRequire' : 0,
    'skillDelay': 1,
    'skillTime': 1,
    'skillEffects': [
        {
            'skillValue': 25,
            'skillMethod': 'ApplyDamage'
        }
    ]
    },{
    'uID': '917e6061-e0ba-4819-b28b-34fa85788f1d',
    'objectName': 'Strong arrow',
    'objectAvatar': 'StrongArrow-avatar',
    'objectModel': 'StrongArrow-model',
    'characterClasses': ['Archer'],
    'levelRequire' : 0,
    'skillDelay': 1,
    'skillTime': 1,
    'skillEffects': [
        {
            'skillValue': 15,
            'skillMethod': 'ApplyDamage'
        }
    ]
    }]);
db.clSkills.find({$and: [{characterClasses: {$regex: /w/i}},{levelRequire: {$lte: 3}}]});
db.clSkills.find({objectName: { $in: ['Normal Attack', 'Fire ball'] }});
db.clSkills.remove({});

db.createCollection('clMonsters');
db.clMonsters.createIndex({'uID': 1}, {unique: true});
db.clMonsters.insertMany([{
    'uID': '0e9ce878-e95e-43b7-afd7-c23bcca1eb92',
    'objectName': 'Bat',
    'objectAvatar': 'Bat-avatar',
    'objectModel': 'Bat-model',
    'characterClass': 'Warrior',
    'characterAttackPoint': 20,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 5,
    'maxDefendPoint': 500,
    'characterHealthPoint': 50,
    'characterMaxHealthPoint': 50,
    'maxHealthPoint': 9999,
    'characterSkillSlots': [],
    'characterLevel': 1,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    },{
    'uID': '3b3d7412-437a-4a73-901d-33a7811a44c2',
    'objectName': 'Ghost',
    'objectAvatar': 'Ghost-avatar',
    'objectModel': 'Ghost-model',
    'characterClass': 'Wizard',
    'characterAttackPoint': 20,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 5,
    'maxDefendPoint': 500,
    'characterHealthPoint': 50,
    'characterMaxHealthPoint': 50,
    'maxHealthPoint': 9999,
    'characterSkillSlots': [],
    'characterLevel': 1,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    },{
    'uID': '7531c544-ce9a-4faf-bda4-8e38b6a9ffa3',
    'objectName': 'Rabbit',
    'objectAvatar': 'Rabbit-avatar',
    'objectModel': 'Rabbit-model',
    'characterClass': 'Archer',
    'characterAttackPoint': 20,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 5,
    'maxDefendPoint': 500,
    'characterHealthPoint': 50,
    'characterMaxHealthPoint': 50,
    'maxHealthPoint': 9999,
    'characterSkillSlots': [],
    'characterLevel': 1,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    },{
    'uID': '4183cf0f-807c-4ea1-9cd8-984d17321875',
    'objectName': 'Slime',
    'objectAvatar': 'Slime-avatar',
    'objectModel': 'Slime-model',
    'characterClass': 'Warrior',
    'characterAttackPoint': 20,
    'maxAttackPoint': 500,
    'characterAttackSpeed': 1,
    'maxAttackSpeed': 2,
    'characterDefendPoint': 5,
    'maxDefendPoint': 500,
    'characterHealthPoint': 50,
    'characterMaxHealthPoint': 50,
    'maxHealthPoint': 9999,
    'characterSkillSlots': [],
    'characterLevel': 1,
    'dataPerLevel': {
            'characterAttackPoint': 2,
            'characterAttackSpeed': 0.1,
            'characterDefendPoint': 2,
            'characterMaxHealthPoint': 5
        }
    }]);
  
db.createCollection("clMaps");
db.clMaps.createIndex({'uID': 1}, {unique: true});
db.clMaps.find({});
db.clMaps.remove({});

db.createCollection("clBattleLogs");
db.clBattleLogs.createIndex({'uID': 1}, {unique: true});
db.clBattleLogs.find({}); 
db.clBattleLogs.remove({});   

db.clMonsters.find({});
db.clMonsters.find({objectName: {$regex: /i/i}});
db.clMonsters.find({objectName: /i/i}});

db.clUsers.aggregate([{$match: {uName: {$in: ['user0001', 'user0005']}}}, {$sample: {size: 5}}])
db.clHeroes.find({characterLevel: { $gte:1, $lt: 4 }})
db.clHeroes.aggregate([{$match: {characterLevel: { $gte:1, $lt: 4 }}}, {$sample: {size: 5}}])
db.clHeroes.aggregate([{$match: {characterLevel: { $gte:1, $lt: 4 }, uID: {$ne: '91c7e267-4767-482f-9e16-8af0ba056ca0s'}}}, {$sample: {size: 5}}])

db.clHeroes.find({objectName: 'Playera8b7b'});

db.clSkills.find({});
db.clHeroes.updateMany({}, {$set: {
    currentGlory: 0,
    maxGlory: 999999999}});




