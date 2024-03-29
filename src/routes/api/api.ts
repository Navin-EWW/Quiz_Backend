import { Request, Router, Response } from "express";
import { PingController } from "../../app/http/controllers/api/PingController";
import { verifyToken } from "../../app/http/middleware/Auth";
import devicesRouter from "./device";
import NotificationRouter from "./notification";
import authRouter from "./auth";
//ROUTES IMPORT

const router = Router();

router.get("/", PingController.pong);

router.use("/", authRouter);

router.use("/devices", verifyToken, devicesRouter);

router.use("/notifications", verifyToken, NotificationRouter);

//ROUTERS USE ADD HERE

/**
 * 404 api redirects
 */
router.use(function (req: Request, res: Response) {
  res.status(404).send({
    status: false,
    message: "Not found",
  });
});

export default router;
