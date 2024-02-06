import { Subject } from "@prisma/client";
import dbConnection from "../providers/db";

export class SubjectService {

  public static async createSubject(validatedData: {
    userId: number;
    name: string;
    discription: string;
  }): Promise<Subject> {

    console.log("-----createSubject",validatedData)

    const { name, discription, userId } = validatedData;
    // try {
      const subjectData = await dbConnection.subject.create({
        data: {
          userId,
          name,
          discription,
        },
      });
      console.log("subjectData",subjectData)

      return subjectData;
    // } catch (error) {
    //   console.log(error)
    // }
     
   
  }
  public static async findSubjectById(id: number): Promise<Subject | null> {
      return await dbConnection.subject.findFirst({
        where: {
          id: id,
        },
      });
    }
  public static async findSubjects(): Promise<Subject[] | null> {
      return await dbConnection.subject.findMany();
    }
  public static async deleteSubjectById(id: number ): Promise<Subject | null> {
      return await dbConnection.subject.delete({
        where: {
          id: id,
        },
      });
    }
  public static async updateSubjectById(id: number ,data:any): Promise<Subject | null> {

    const findsubjectData=await dbConnection.subject.findFirst({
      where: {
        id: id,
      },
    });
      return await dbConnection.subject.update({
        where: {
          id: findsubjectData?.id,
        },
        data:{
          ...data
        }
      });
    }

}
