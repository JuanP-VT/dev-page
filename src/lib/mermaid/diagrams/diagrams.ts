import { LEGACY_RETRIEVAL_DIAGRAM } from "@/app/cases/s3-migration/diagrams/legacyRetrieval";
import { LEGACY_UPLOAD_DIAGRAM } from "@/app/cases/s3-migration/diagrams/legacyUpload";
import { NEW_UPLOAD_DIAGRAM } from "@/app/cases/s3-migration/diagrams/newUpload";
import { NEW_RETRIEVAL } from "@/app/cases/s3-migration/diagrams/newRetrieval";
import { MIGRATION } from "@/app/cases/s3-migration/diagrams/migration";
import { ERROR_TRANSLATION_MACRO_FLOW } from "@/app/cases/error-translation/diagrams/macroFlow";
import { DATA_TRANSFORMATION_PIPELINE } from "@/app/cases/error-translation/diagrams/dataTransformationPipeline";
import { REGINA_CORE_FLOW } from "../../../../public/img/projects/regina/diagrams/coreFlow";

LEGACY_RETRIEVAL_DIAGRAM
export const DIAGRAMS = {
	LEGACY_UPLOAD: LEGACY_UPLOAD_DIAGRAM,
	LEGACY_RETRIEVAL: LEGACY_RETRIEVAL_DIAGRAM,
	NEW_UPLOAD: NEW_UPLOAD_DIAGRAM,
	NEW_RETRIEVAL: NEW_RETRIEVAL,
	MIGRATION: MIGRATION,
	ERROR_TRANSLATION_MACRO: ERROR_TRANSLATION_MACRO_FLOW,
	DATA_TRANSFORMATION_PIPELINE: DATA_TRANSFORMATION_PIPELINE,
	REGINA_CORE_FLOW:REGINA_CORE_FLOW,
} as const;

export type DiagramName = keyof typeof DIAGRAMS;