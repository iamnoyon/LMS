"use client";

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    ArrowUpDown,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import React, { useState } from "react";

const ReactTable = ({ columns, dataScource }) => {
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const table = useReactTable({
        data: dataScource,
        columns: columns,
        state: {
            sorting,
            globalFilter,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
    });

    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto bg-gray-100 rounded-b-[7px]">
                {/* 🔍 Global Filter */}
                <div className="w-[200px my-2 text-right mr-5">
                    <input
                        id="staticSearch"
                        type="text"
                        value={globalFilter ?? ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        placeholder="Search..."
                        className="bg-white rounded border border-gray-300 text-sm focus:outline-none focus:ring focus:ring-blue-200 w-100%"
                    />
                </div>

                {/* 📊 Table */}
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                    <thead className="bg-gray-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    const isSortable = header.column.columnDef.enableSorting;
                                    return (
                                        <th
                                            key={header.id}
                                            onClick={
                                                isSortable
                                                    ? header.column.getToggleSortingHandler()
                                                    : undefined
                                            }
                                            className={`px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider ${isSortable ? "cursor-pointer select-none" : ""
                                                }`}
                                        >
                                            <span className="flex items-center gap-1">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {isSortable && <ArrowUpDown className="h-4 w-4" />}
                                            </span>
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {table.getRowModel().rows.map((row) => (
                            <tr className="hover:bg-gray-50" key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                                        key={cell.id}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 🔁 Pagination + Page Size */}
                <div className="flex justify-between items-center px-14 py-3">
                    {/* Page Size Dropdown */}
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="pageSizeSelect"
                            className="text-sm text-gray-700"
                        >
                            Show
                        </label>
                        <select
                            id="pageSizeSelect"
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => table.setPageSize(Number(e.target.value))}
                            className="border bg-white rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                        >
                            {[5, 10, 20, 30].map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <label
                            htmlFor="pageSizeSelect"
                            className="text-sm  text-gray-700"
                        >
                            entries
                        </label>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                            className="p-1 text-gray-600 hover:text-black disabled:opacity-30"
                        >
                            <ChevronsLeft size={18} />
                        </button>
                        <button
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="p-1 text-gray-600 hover:text-black disabled:opacity-30"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <span className="text-sm text-gray-700">
                            Page{" "}
                            <strong>
                                {table.getState().pagination.pageIndex + 1} of{" "}
                                {table.getPageCount()}
                            </strong>
                        </span>

                        <button
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="p-1 text-gray-600 hover:text-black disabled:opacity-30"
                        >
                            <ChevronRight size={18} />
                        </button>
                        <button
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                            className="p-1 text-gray-600 hover:text-black disabled:opacity-30"
                        >
                            <ChevronsRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactTable;