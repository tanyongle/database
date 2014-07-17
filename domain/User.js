module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", {
          ID:{type:DataTypes.INTEGER, primaryKey: true, unique: false ,comment: "ID" },
          name: {type: DataTypes.STRING, primaryKey: false, unique: true ,comment: "用户名" },
          email: {type: DataTypes.STRING, primaryKey: false, unique: false ,comment: "邮箱"  },
          password:{type: DataTypes.STRING, primaryKey: false, unique: false ,comment: "密码MD5加密" },
          createTime: {type: DataTypes.BIGINT, primaryKey: false, unique: false  ,comment: "创建时间" },
          lastLoginTime: {type: DataTypes.BIGINT, primaryKey: false, unique: false,defaultValue:0,comment: "最后登陆时间"  }
          //column: {type: DataTypes.BIGINT, primaryKey: false, unique: false,defaultValue:-1,comment: "注释"}
    },{
      timestamps: false
    },{
      instanceMethods: {},
      classMethods: {}
    });
};




