export interface Exam {
    clinicName: string,
    documents: any,
    executionDate: Date,
    id: number,
    identification: string,
    images: any,
    isEmergency: boolean,
    pacsMobileViewerURL,
    patient: string,
    pdfReportLink: string,
    referringPhysicianName: string,
    referringPhysicianProID: string,
    reportLink: string,
    reportingPhysicianName: string,
    reportingPhysicianProID: string,
    serviceName: string,
    status: string
}