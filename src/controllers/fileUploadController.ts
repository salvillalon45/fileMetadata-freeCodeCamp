export async function uploadFileAnalyse(req: any, res: any, next: any) {
	try {
		const { mimetype: type, size, originalname: name } = req.file;

		res.status(200).json({
			name,
			type,
			size
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Error in fileUploadAnalyse',
			error
		});
	}
}
