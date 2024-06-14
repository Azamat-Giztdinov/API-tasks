'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string | null;
  public status!:'выполняется'| 'выполнено';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

const initTaskModel = (sequelize: Sequelize) => {
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('выполняется', 'выполнено'),
      allowNull: false,
      defaultValue: 'выполняется',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'Task',
    timestamps: true,
  });
};

export { Task, initTaskModel };
