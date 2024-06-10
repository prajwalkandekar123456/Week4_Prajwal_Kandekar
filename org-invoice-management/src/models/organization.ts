import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Organization extends Model {}

Organization.init(
  {
    id: {
      type: DataTypes.INTEGER, // Change data type to INTEGER
      primaryKey: true,
      autoIncrement: true, // Add autoIncrement attribute
    },
    gstNo: DataTypes.STRING,
    panNo: DataTypes.STRING,
    legalOrganizationName: DataTypes.STRING,
    invoiceTemplateId: DataTypes.STRING,
    shortName: DataTypes.STRING,
    contactName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    addressId: DataTypes.STRING,
    phone: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Organization",
    timestamps: false, // Optionally, if you don't want Sequelize to add createdAt and updatedAt columns
  }
);

export default Organization;
