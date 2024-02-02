import { Request, Response } from "express";

// export class QuizController {
//     public static async createQuiz(req: Request, res: Response) {
//         const validatedData = req.body;
//         const userExists = await SignUpService.checkIfUserExists(
//           validatedData.email
//         );
    
//         if (userExists) {
//           return res.status(400).send({
//             status: false,
//             message: req.t("user.user_already_exists"),
//           });
//         }
    
//         const user = await SignUpService.signUp(validatedData);
//         const { deviceType, fcmToken, metaData } = validatedData;
//         const device = await DeviceService.create(
//           user.id,
//           deviceType,
//           fcmToken ?? null,
//           metaData ?? {}
//         );
    
//         return res.send({
//           status: true,
//           data: UserResponse(user),
//           accessToken: device.authToken,
//           message: req.t("user.user_created"),
//         });
//       }
// }