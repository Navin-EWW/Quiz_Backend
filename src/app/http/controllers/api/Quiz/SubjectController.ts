import { Request, Response } from "express";
import { SubjectService } from "../../../../services/SubjectService";

export class SubjectController {
    public static async createSubject(req: Request, res: Response) {
      // const {  } = req.body.validatedData;
      const { user } = req.body.auth;
      const validatedData = req.body;
      console.log(user,validatedData)
      try {
        const subject = await SubjectService.createSubject({
          discription:validatedData?.discription??"",
          name:validatedData.name,
          userId:user.id
        }); 

        if(!subject)
        {
          return res.status(500).send({
            status: false,
            data: subject,
            message:"something went wrong",
          });

        }

        return res.status(201).send({
          status: true,
          data: subject,
          message:"subject Created",
        });
      } catch (error) {
        return res.send({
          status: false,
          data: "subject",
          message:"subject Created",
        });
      }
     
    }
    public static async allSubject(req: Request, res: Response) {
      const { user } = req.body.auth;
      console.log("-allSubject")
      try {
        const allSubject = await SubjectService.findSubjects()

        if(!allSubject)
        {
          return res.status(500).send({
            status: false,
            data: allSubject,
            message:"something went wrong",
          });

        }

        return res.status(201).send({
          status: true,
          data: allSubject,
          message:"all subject",
        });
      } catch (error) {
        return res.send({
          status: false,
          message:{error},
        });
      }
     
    }
    public static async SubjectById(req: Request, res: Response) {
      const { user } = req.body.auth;
      const { subjectId } = req.params;

      console.log("-SubjectById",subjectId)
      try {
        const Subject = await SubjectService.findSubjectById(Number(subjectId))

        if(!Subject)
        {
          return res.status(500).send({
            status: false,
            data: Subject,
            message:"something went wrong",
          });

        }

        return res.status(200).send({
          status: true,
          data: Subject,
          message:"all subject",
        });

      } catch (error) {
        return res.status(400).send({
          status: false,
          message:{error},
        });
      }
     
    }
}