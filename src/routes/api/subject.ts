import { Router } from "express";
import { RequestValidator } from "../../app/http/middleware/RequestValidator";
import { SubjectController } from "../../app/http/controllers/api/Quiz/SubjectController";
import { createSubjectRequest } from "../../app/http/requests/SubjectRequest";

const router = Router();

router.post(
  "/",
  RequestValidator(createSubjectRequest),
  SubjectController.createSubject
);
router.get(
  "/",
  SubjectController.allSubject
);
router.patch(
  "/subjectId",
  SubjectController.SubjectUpdate
);
router.get(
  "/:subjectId",
  SubjectController.SubjectById
);

export default router;