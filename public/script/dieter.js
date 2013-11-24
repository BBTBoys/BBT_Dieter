var dieter = dieter || {};

(function ($dieter, $) {
	$dieter.Weight = (function () {
		var saveWeight = function (userId) {
			var weight = $("#weight").val();
			
			$.ajax({
				url : "/user/weight/save",
				type : "POST",
				data : {
					userId : userId,
					weight : weight
				},
				dataType : "json",
				success : function (result) {
					var listWrapper = $("#listWrapper");
					if (result && result.code == 200) {
						alert(result.message);
						$(listWrapper).append(result.content);
					}
				}
			});
		};
		
		return {
			saveWeight : saveWeight
		};
	})();
})(dieter, jQuery);