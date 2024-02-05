import { Devices } from "@prisma/client";
import { object, string } from "yup";

export const createSubjectRequest = object({
    name: string().required(),
    discription: string()
});
