function secondHighest(arr) {
			let first = -Infinity, second = -Infinity;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] > first) {
				second = first;
				first = arr[i];
				} else if (arr[i] > second && arr[i] < first) {
				second = arr[i];
				}
			}
			return second;
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();
