package com.worksphere.ws.service.impl;

import com.worksphere.ws.dto.EmployeeDto;
import com.worksphere.ws.entity.Employee;
import com.worksphere.ws.mapper.EmployeeMapper;
import com.worksphere.ws.repository.EmployeeRepository;
import com.worksphere.ws.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
