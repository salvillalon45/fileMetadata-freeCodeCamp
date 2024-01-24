export async function uploadFileAnalyse(req: any, res: any, next: any) {
	try {
		console.log('insie upload file analyse');
		console.log(req.body);

		res.status(200).json();
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Error in fileUploadAnalyse',
			error
		});
	}
}
