(function(){
	var options = {
		bezierCurve: false,
		datasetFill: false
	};

	var DataRef = function() {
		this.labels = [
			"5","10","15","20","25",
			"30","35","50","75","100",
			"125","150","175","200","225",
			"250","275","300","325","350",
			"375","400","425","450","475",
			"500","525","550","575","600",
			"625","650","675","700","725",
			"750","775","800","825","850"
		];
		this.datasets = [
			{
				fillColor: "rgba(90,205,90,.5)",
				strokeColor : "rgba(90,205,90,1)",
				pointColor : "rgba(90,205,90,1)",
				pointStrokeColor : "#0"
			},
			{
				fillColor: "rgba(90,1,205,.5)",
				strokeColor : "rgba(90,1,205,1)",
				pointColor : "rgba(90,1,205,1)",
				pointStrokeColor : "#0"
			}
		];
	};

	var sym = [9893,4818,10173,10301,474,700,10524],
		node = [2,2,2,2,4,
				2,4,2,2,2,2,
				2,2,2,2,2,
				2,2,2,2,2,
				3,8,23,6,69,
				98,115,224,258,209,
				331,450,1140,1083,1240,
				1210,1137,1073,1111],
		limits = new DataRef();

		limits.datasets[0].data = sym;
		limits.datasets[1].data = node;

        new Chart(
        		document.getElementById('limit-data').getContext('2d')
        	).Line(limits,options);

})();