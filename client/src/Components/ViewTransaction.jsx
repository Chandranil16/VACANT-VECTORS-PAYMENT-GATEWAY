import  { useState, useRef } from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

const ViewTransaction = () => {
    const [transactions] = useState([
        { date: '2023-10-01T10:00:00', invoiceNo: 'INV001', type: 'Sale', status: 'Completed', amount: 100, customer: 'John Doe' },
        { date: '2023-10-02T11:00:00', invoiceNo: 'INV002', type: 'Refund', status: 'Pending', amount: -50, customer: 'Jane Smith' },
        { date: '2023-10-03T12:00:00', invoiceNo: 'INV003', type: 'Sale', status: 'Paid', amount: 200, customer: 'Alice Johnson' },
        { date: '2023-10-04T13:00:00', invoiceNo: 'INV004', type: 'Sale', status: 'Expired', amount: 150, customer: 'Bob Brown' },
        { date: '2023-10-05T14:00:00', invoiceNo: 'INV005', type: 'Refund', status: 'Completed', amount: -75, customer: 'Charlie Davis' },
        { date: '2023-10-06T15:00:00', invoiceNo: 'INV006', type: 'Sale', status: 'Pending', amount: 300, customer: 'Diana Evans' },
        { date: '2023-10-07T16:00:00', invoiceNo: 'INV007', type: 'Sale', status: 'Completed', amount: 400, customer: 'Eve Foster' },
        { date: '2023-10-08T17:00:00', invoiceNo: 'INV008', type: 'Refund', status: 'Paid', amount: -100, customer: 'Frank Green' },
        { date: '2023-10-09T18:00:00', invoiceNo: 'INV009', type: 'Sale', status: 'Expired', amount: 250, customer: 'Grace Hall' },
        { date: '2023-10-10T19:00:00', invoiceNo: 'INV010', type: 'Sale', status: 'Pending', amount: 500, customer: 'Hank Ives' },
        { date: '2023-10-11T20:00:00', invoiceNo: 'INV011', type: 'Sale', status: 'Completed', amount: 600, customer: 'Ivy James' },
        { date: '2023-10-12T21:00:00', invoiceNo: 'INV012', type: 'Refund', status: 'Pending', amount: -150, customer: 'Jack King' },
        { date: '2023-10-13T22:00:00', invoiceNo: 'INV013', type: 'Sale', status: 'Paid', amount: 700, customer: 'Liam Miller' },
        { date: '2023-10-14T23:00:00', invoiceNo: 'INV014', type: 'Sale', status: 'Expired', amount: 800, customer: 'Mia Nelson' },
        { date: '2023-10-15T00:00:00', invoiceNo: 'INV015', type: 'Refund', status: 'Completed', amount: -200, customer: 'Noah Owens' },
        { date: '2023-10-16T01:00:00', invoiceNo: 'INV016', type: 'Sale', status: 'Pending', amount: 900, customer: 'Olivia Parker' },
        { date: '2023-10-17T02:00:00', invoiceNo: 'INV017', type: 'Sale', status: 'Completed', amount: 1000, customer: 'Paul Quinn' },
        { date: '2023-10-18T03:00:00', invoiceNo: 'INV018', type: 'Refund', status: 'Paid', amount: -250, customer: 'Quinn Roberts' },
        { date: '2023-10-19T04:00:00', invoiceNo: 'INV019', type: 'Sale', status: 'Expired', amount: 1100, customer: 'Ryan Scott' },
        { date: '2023-10-20T05:00:00', invoiceNo: 'INV020', type: 'Sale', status: 'Pending', amount: 1200, customer: 'Sophia Turner' },
    ]);

    const [filters, setFilters] = useState({
        fromDate: '',
        fromTime: '',
        toDate: '',
        toTime: '',
        status: '',
        invoiceNo: '',
    });

    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    const [showExportOptions, setShowExportOptions] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 10;
    const csvLinkRef = useRef();

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleSearch = () => {
        const filtered = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            const fromDate = filters.fromDate ? new Date(`${filters.fromDate}T${filters.fromTime || '00:00'}`) : null;
            const toDate = filters.toDate ? new Date(`${filters.toDate}T${filters.toTime || '23:59'}`) : null;

            return (
                (!fromDate || transactionDate >= fromDate) &&
                (!toDate || transactionDate <= toDate) &&
                (filters.status === '' || transaction.status === filters.status) &&
                (filters.invoiceNo === '' || transaction.invoiceNo.includes(filters.invoiceNo))
            );
        });
        setFilteredTransactions(filtered);
        setCurrentPage(1); // Reset to first page on search
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredTransactions);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
        XLSX.writeFile(workbook, "transactions.xlsx");
    };

    const handleSortChange = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = sortedTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(sortedTransactions.length / transactionsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
            <div className="mb-4 flex flex-wrap space-x-4">
                <div className="w-full sm:w-auto">
                    <label className="block text-sm font-medium text-gray-700">From Date</label>
                    <input
                        type="date"
                        name="fromDate"
                        value={filters.fromDate}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="time"
                        name="fromTime"
                        value={filters.fromTime}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full mt-1"
                    />
                </div>
                <div className="w-full sm:w-auto">
                    <label className="block text-sm font-medium text-gray-700">To Date</label>
                    <input
                        type="date"
                        name="toDate"
                        value={filters.toDate}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="time"
                        name="toTime"
                        value={filters.toTime}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full mt-1"
                    />
                </div>
                <div className="w-full sm:w-auto">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full"
                    >
                        <option value="">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Expired">Expired</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="w-full sm:w-auto">
                    <label className="block text-sm font-medium text-gray-700">Invoice No.</label>
                    <input
                        type="text"
                        name="invoiceNo"
                        placeholder="Filter by Invoice No."
                        value={filters.invoiceNo}
                        onChange={handleFilterChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="flex items-end space-x-2 w-full sm:w-auto">
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Search
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setShowExportOptions(!showExportOptions)}
                            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                            Export
                        </button>
                        {showExportOptions && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-2 sm:right-auto sm:left-0 sm:mt-2 sm:w-48">
                                <button
                                    onClick={() => {
                                        setShowExportOptions(false);
                                        csvLinkRef.current.link.click();
                                    }}
                                    className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Export as CSV
                                </button>
                                <button
                                    onClick={() => {
                                        setShowExportOptions(false);
                                        exportToExcel();
                                    }}
                                    className="block w-full text-left px-6 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Export as Excel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <CSVLink
                    data={filteredTransactions}
                    filename={"transactions.csv"}
                    className="hidden"
                    ref={csvLinkRef}
                />
            </div>
            <div className="mb-4 flex flex-wrap space-x-4">
                <select
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="date">Sort by Date & Time</option>
                    <option value="invoiceNo">Sort by Invoice No.</option>
                    <option value="type">Sort by Type</option>
                    <option value="status">Sort by Status</option>
                    <option value="amount">Sort by Amount</option>
                    <option value="customer">Sort by Customer</option>
                </select>
                <button
                    onClick={() => handleSortChange(sortConfig.key)}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                >
                    {sortConfig.direction === 'ascending' ? 'Sort Descending' : 'Sort Ascending'}
                </button>
            </div>
            <div className="mb-4 flex justify-between items-center">
                <button
                    onClick={handlePreviousPage}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>
                    Showing {currentPage} out of {totalPages} pages
                </span>
                <button
                    onClick={handleNextPage}
                    className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b w-1/6 text-left">Date & Time</th>
                            <th className="py-2 px-4 border-b w-1/6 text-left">Invoice No.</th>
                            <th className="py-2 px-4 border-b w-1/6 text-left">Type</th>
                            <th className="py-2 px-4 border-b w-1/6 text-left">Status</th>
                            <th className="py-2 px-4 border-b w-1/6 text-left">Amount</th>
                            <th className="py-2 px-4 border-b w-1/6 text-left">Customer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTransactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{formatDate(transaction.date)}</td>
                                <td className="py-2 px-4 border-b">{transaction.invoiceNo}</td>
                                <td className="py-2 px-4 border-b">{transaction.type}</td>
                                <td className="py-2 px-4 border-b">{transaction.status}</td>
                                <td className="py-2 px-4 border-b">{transaction.amount}</td>
                                <td className="py-2 px-4 border-b">{transaction.customer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewTransaction;