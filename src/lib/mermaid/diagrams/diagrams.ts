import { LEGACY_RETRIEVAL_DIAGRAM } from "@/app/cases/s3-migration/diagrams/legacyRetrieval";
import { LEGACY_UPLOAD_DIAGRAM } from "@/app/cases/s3-migration/diagrams/legacyUpload";
import { NEW_UPLOAD_DIAGRAM } from "@/app/cases/s3-migration/diagrams/newUpload";
import { NEW_RETRIEVAL } from "@/app/cases/s3-migration/diagrams/newRetrieval";
import { MIGRATION } from "@/app/cases/s3-migration/diagrams/migration";

LEGACY_RETRIEVAL_DIAGRAM
export const DIAGRAMS = {
	LEGACY_UPLOAD: LEGACY_UPLOAD_DIAGRAM,
	LEGACY_RETRIEVAL: LEGACY_RETRIEVAL_DIAGRAM,
	NEW_UPLOAD: NEW_UPLOAD_DIAGRAM,
	NEW_RETRIEVAL: NEW_RETRIEVAL,
	MIGRATION: MIGRATION,
} as const;

export type DiagramName = keyof typeof DIAGRAMS;