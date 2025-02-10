export function formatCellphone(number: string): string {
	const cleaned = number.replace(/\D/g, "");
	const match = cleaned.match(/^(\d{2})(\d{2})(\d{1})(\d{4})(\d{3,4})$/);
	if (match) {
		return `+${match[1]} (${match[2]}) ${match[3]} ${match[4]}-${match[5]}`;
	}
	return number;
}
