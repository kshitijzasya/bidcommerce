import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "../../../lib/auth";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const userData = JSON.parse(req.body);
      // const transactionData = await prisma.$transaction(async (transaction) => {
          let userobj = {
            email: userData.email,
            password: await hashedPassword(userData.password),
            name: userData.name,
          };
console.log(userobj);
          const savedData = await prisma.user.create({
            data: userobj,
          });
          // return {
          //   savedData,
          // };
      // });
      // prisma.$disconnect();
      return res.status(201).json({
        message: "User Register Successfully",
        data: savedData,
        status: 200,
      });
    } catch (error) {
      console.log('in error', error)
      if (error.code == "P2002") {
        return res
          .status(500)
          .json({ error: error, message: "Duplicate Email Address" });
      }
      console.log('in api', req.method, req.body)
      return res
        .status(500)
        .json({ error: error, message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      const reqBody = JSON.parse(req.body);

      return;
      const user = await prisma.user.findUnique({
        where: { email: reqBody.email },
      });
      if (!user) {
        return res.status(404).json({
          status: 404,
          message: `No user Registered with ${reqBody.email}`,
        });
      }

      const updateData = await prisma.user.update({
        where: { email: reqBody.email },
        data: {
          password: await hashedPassword(reqBody.password),
        },
      });

      if (!updateData) {
        return res
          .status(409)
          .json({ status: 409, message: "Failed To Update Data" });
      }

      return res
        .status(200)
        .json({ status: 200, message: "Record Updated Succesfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error, message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({
      message: "Method Not allowed",
    });
  }
};